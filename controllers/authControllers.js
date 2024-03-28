const { promisify } = require('util');
require('dotenv').config();
const User = require('../models/userSchema');
const APPError = require('../utils/appError');
const sendJsonRes = require('../utils/sendJsonRes');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { sendMail, sendVerificationMail, sendPasswordResetMail } = require('../utils/sendMail');
const crypto = require('crypto');
const VerifyUserEmail = require('../models/verifyEmailModel');
const otpGenerator = require('otp-generator');
const { DateToJulian } = require('julian-to-date');

const signToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN //90d after jwt token will expire and user have to sign up agin if the signature
    //correct also
  });
};

const createAndSendToken = (user, statusCode, res) => {
  const token = signToken(user);
  //remove password from output
  if (user.password) user.password = undefined;
  const cookieOptions = {
    //in expires is saved as date in config file so we have to convert it into a mili second
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),

    httpOnly: true
  };

  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user: user
    }
  });
};

const sendEmailCookie = async (user, res) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });

  const cookieOptions = {
    //in expires is saved as date in config file so we have to convert it into a mili second
    expires: new Date(Date.now() + process.env.EMAIL_COOKIE_EXPIRES_IN * 60 * 1000),

    httpOnly: true
  };

  res.cookie('emailVerify', token, cookieOptions);
  res.status(200).json({
    status: true,
    message: 'email sent succesfully'
  });
};

const authenticateEmailUser = async (req, res, next) => {
  try {
    let token;
    if (req.cookies.emailVerify) {
      token = req.cookies.emailVerify;
    }
    if (!token) {
      return next(new APPError('Your Email is not verified , please verify your email first', 401));
    }
    //promisifying  a function with the built in module of node js
    const verifyAsync = promisify(jwt.verify);
    //check if the payload is altered or not, decoded jwt will have have id of that particular user
    //which we are trying to access
    const decoded = await verifyAsync(token, process.env.JWT_SECRET);

    /**
     * 3) if the user is still present or not
     */
    const currentUser = await VerifyUserEmail.findById(decoded.id);

    if (!currentUser) {
      return next(new APPError('User belonging to this token , no longer exists', 401));
    }

    //passing the user property to next middleware
    sendJsonRes(res, 200, currentUser);
  } catch (err) {
    next(new APPError(err.message, 400));
  }
  //grant access to protected routes
};

const verifyEmail = async (req, res, next) => {
  try {
    const url = `${req.protocol}://${req.get('host')}/signup`;
    const user = await VerifyUserEmail.create(req.body);
    await sendVerificationMail(user, url);
    sendEmailCookie(user, res);
  } catch (err) {
    next(new APPError(err.message, 400));
  }
};

const countyList = [
  'Adams',
  'Allen',
  'Ashland',
  'Ashtabula',
  'Athens',
  'Auglaize',
  'Belmont',
  'Brown',
  'Butler',
  'Carroll',
  'Champaign',
  'Clark',
  'Clermont',
  'Clinton',
  'Columbiana',
  'Coshocton',
  'Crawford',
  'Cuyahoga',
  'Darke',
  'Defiance',
  'Delaware',
  'Erie',
  'Fairfield',
  'Fayette',
  'Franklin',
  'Fulton',
  'Gallia',
  'Geauga',
  'Greene',
  'Guernsey',
  'Hamilton',
  'Hancock',
  'Hardin',
  'Harrison',
  'Henry',
  'Highland',
  'Hocking',
  'Holmes',
  'Huron',
  'Jackson',
  'Jefferson',
  'Knox',
  'Lake',
  'Lawrence',
  'Licking',
  'Logan',
  'Lorain',
  'Lucas',
  'Madison',
  'Mahoning',
  'Marion',
  'Medina',
  'Meigs',
  'Mercer',
  'Miami',
  'Monroe',
  'Montgomery',
  'Morgan',
  'Morrow',
  'Muskingum',
  'Noble',
  'Ottawa',
  'Paulding',
  'Perry',
  'Pickaway',
  'Pike',
  'Portage',
  'Preble',
  'Putnam',
  'Richland',
  'Ross',
  'Sandusky',
  'Scioto',
  'Seneca',
  'Shelby',
  'Stark',
  'Summit',
  'Trumbull',
  'Tuscarawas',
  'Union',
  'Van Wert',
  'Vinton',
  'Warren',
  'Washington',
  'Wayne',
  'Williams',
  'Wood ',
  'Wyandot'
];

const signup = async (req, res, next) => {
  const { county, born } = req.body;
  console.log(county, born);
  const index = countyList.indexOf(county) + 1;
  const randomString1 = otpGenerator.generate(6, { lowerCaseAlphabets: false, specialChars: false });
  const randomString2 = otpGenerator.generate(6, { lowerCaseAlphabets: false, specialChars: false });
  const recNo = `oh${index}-${DateToJulian(born)}-${randomString1}`;
  const masterRec = `${index}-${randomString2}`;
  req.body.recordingNumber = recNo;
  req.body.masterRecord = masterRec;

  const userExist = await User.findOne({
    primaryEmail: req.body.primaryEmail
  });

  // if a user who's on hold, try to sign up again
  if (userExist && userExist.isApproved === false) {
    return next(new APPError('Your approval is on hold', 400));
  } else {
    if (userExist) {
      return next(new APPError('User already exist on given email address', 409));
    } else {
      try {
        const newUser = await User.create(req.body);
        await sendMail(newUser);
        createAndSendToken(newUser, 201, res);
      } catch (err) {
        console.log(err);
        // general error left uncaught
        next(new APPError(err.message, 400));
      }
    }
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new APPError('please provide email and password', 400));
    }

    const user = await User.findOne({ primaryEmail: email }).select('+password');

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return next(new APPError(`Incorrect email or password`, 401));
    }
    if (user && user.isApproved === false) {
      return next(new APPError(`Your registration is currently on hold for verification`, 403));
    }

    createAndSendToken(user, 200, res);
  } catch (error) {
    next(new APPError(error.message, 400));
  }
};

const protect = async (req, res, next) => {
  /**
   * 1) Getting token and check of it's there
   * 2)verification of token
   * 3)chek if user still exists
   * 4)check if user changes password after token was issued
   *    */

  try {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      /*authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWNkMmVhYTE2MzYyMmQ3MTg5Y2MxYyIsImlhdCI6MTY5NjUyNDM3MSwiZXhwIjoxNzA0MzAwMzcxfQ.0Gq-COKiBO2BKvomDq0quMC22x8MpoRe6rBUt3ZV9YM',*/
      //the second one is token and we need the token only thats why we implemented split function
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }
    if (!token) {
      return next(new APPError('You are not logged in, please login to app first', 401));
    }
    //promisifying  a function with the built in module of node js
    const verifyAsync = promisify(jwt.verify);
    //check if the payload is altered or not, decoded jwt will have have id of that particular user
    //which we are trying to access
    const decoded = await verifyAsync(token, process.env.JWT_SECRET);

    /**
     * 3) if the user is still present or not
     */
    const currentUser = await User.findById(decoded.id);

    if (!currentUser) {
      return next(new APPError('User belonging to this token , no longer exists', 401));
    }
    /**
     * 4) check if the user changed the password after the token issued
     * instances method always called on user
     */

    if (currentUser.changedPasswordAfter(decoded.iat)) {
      return next(new APPError('User recently changed password', 401));
    }
    //passing the user property to next middleware
    req.user = currentUser;
  } catch (err) {
    return next(new APPError(err.message, 400));
  }
  //grant access to protected routes
  next();
};

//authorization
const restrictTo = (...roles) => {
  return (req, res, next) => {
    //roles is an array ['user', 'admin', 'super admin', 'secretary']
    //as this middle ware runs after the protect middleware so we have acess to the req.user property
    if (!roles.includes(req.user.role)) {
      return next(new APPError('you do not have permission to access this routes', 403));
    }
    next();
  };
};

const forgotPassword = async (req, res, next) => {
  /**
   * 1) get user based on posted email
   * 2) generate a random token
   * 3) sendit back via email
   */
  try {
    const user = await User.findOne({ primaryEmail: req.body.email });
    if (!user) {
      return next(new APPError('no user find with this email, please check your email', 404));
    }
    // instances method always called on user
    //in the function we are only updating the property but not saved the changes in database, so we have to save the docu
    //ment first

    const resetToken = user.createPasswordResetToken();

    //save the user in database after updating the resetPasswordToken
    await user.save({ validateBeforeSave: false });

    //4) send mail
    const resetUrl = `${req.protocol}://${req.get('host')}/reset-password/${resetToken}`;
    console.log(`resrt url = ${resetUrl}`);

    try {
      await sendPasswordResetMail(user.primaryEmail, resetUrl);
    } catch (error) {
      (user.passwordResetToken = undefined), (user.passwordResetExpires = undefined);
      await user.save({ validateBeforeSave: false });
      return next(new APPError('there was an error sending the mail', 500));
    }
    res.status(200).json({
      status: true,
      message: 'token sent to mail'
    });
  } catch (error) {
    return next(new APPError(error.message, 401));
  }
};

const resetPassword = async (req, res, next) => {
  try {
    //1) get user based on token
    const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() }
    });
    // if (Date.now() > user.passwordResetExpires) {
    //   return next(new APPError('Time expired'));
    // }
    if (!user) {
      return next(new APPError('Token is invalid or expired', 404));
    }
    //2) if token is expired , and there is a user , set a new password
    user.password = req.body.password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    //here we want to run the validatior to check whether the password and password confirm is same

    //3) update changePasswordAt property for the password

    await user.save();
    //4) log in and sent jwt
    const token = signToken(user._id);
    res.status(200).json({
      status: 'success',
      token
    });
  } catch (error) {
    console.log(error);
    return next(new APPError(error.message, 401));
  }
};

const updatePassword = async (req, res, next) => {
  /**
   * 1) get user from collection
   * 2)check if the posted password is correct
   * 3)if so, update the password
   */
  //update password is a protected routes , so it has to pass the protexct middleware -> req.user
  try {
    const { currentPassword } = req.body;
    const user = await User.findById(req.user.id).select('+password');
    if (!(await bcrypt.compare(currentPassword, user.password)))
      return next(new APPError('Please enter the correct password', 401));
    user.password = req.body.password;
    user.passwordconfirm = req.body.passwordConfirm;
    await user.save();
    createAndSendToken(user, 200, res);
  } catch (err) {
    next(new APPError(err.message, 403));
  }
};

const logOut = (req, res, next) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  res.status(200).json({
    status: 'success'
  });
};

// only for rendered pages

const isLoggedIn = async (req, res, next) => {
  try {
    if (req.cookies.jwt) {
      const verifyAsync = promisify(jwt.verify);

      const decoded = await verifyAsync(req.cookies.jwt, process.env.JWT_SECRET);
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next(new APPError('No one found with this Id', 404));
      }

      if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next(new APPError('Please log in to the app', 403));
      }

      //There is a logged in users
      res.status(200).json({
        status: 'success',
        data: {
          user: currentUser
        }
      });
    } else {
      throw new Error('No cookie found');
    }
  } catch (err) {
    next(new APPError(err.message, 400));
  }
};

const uploadFile = async (req, res, next) => {
  try {
    const postUrl = await uploadOnclould(path.join(__dirname, '..', 'public', 'temp', req.filename), false);
    if (!postUrl) return next(new APPError('Please provide file name', 404));
    req.body.url = postUrl;
  } catch (err) {
    return next(new APPError(err.message, 400));
  }
  next();
};

module.exports = {
  verifyEmail,
  uploadFile,
  signup,
  login,
  protect,
  restrictTo,
  forgotPassword,
  resetPassword,
  updatePassword,
  isLoggedIn,
  logOut,
  authenticateEmailUser
};
