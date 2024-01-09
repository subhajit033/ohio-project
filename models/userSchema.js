const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const userSchema = new mongoose.Schema(
  {
    firstName: {
      required: true,
      type: String
    },
    middleName: {
      type: String
    },
    lastName: {
      required: true,
      type: String
    },

    born: {
      required: true,
      type: Date
    },
    personType: {
      required: true,
      type: String
    },

    sex: {
      required: true,
      type: String
    },

    photo: {
      type: String
    },
    seal: {
      type: String
    },
    placeOfInhabitance: {
      required: true,

      type: String
    },

    mailingAddress: {
      required: true,
      type: String
    },
    SecMailingAddress: {
      type: String
    },
    mailingCity: {
      required: true,
      type: String
    },
    county: {
      required: true,
      type: String
    },
    mailingState: {
      required: true,
      type: String
    },
    postalCode: {
      required: true,
      type: String
    },
    // https://stackoverflow.com/a/66383722
    mobileNo: {
      required: true,
      type: Number
    },

    primaryEmail: {
      required: true,
      type: String
    },
    secondaryEmail: {
      type: String
    },
    password: {
      required: true,
      type: String,
      select: false
    },
    secretaryEmail: {
      required: true,
      type: String
    },
    coordinatorEmail: {
      type: String
    },
    memberShip: {
      required: true,
      type: [String]
    },

    isApproved: {
      type: Boolean,
      default: false
    },
    secretary: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Secretary'
    },
    role: {
      type: String,
      enum: {
        values: ['user', 'admin', 'super admin', 'secretary'],
        message: 'role should be either user or admin or super admin or secretary'
      },
      default: 'user'
    },
    otp: {
      type: String
    },
    otpExpiration: {
      type: Date
    },
    //for recording secretary part(will update by rec-sec)
    recordingNumber: String,
    masterRecord: String,
    status:{
      type: String,
      default: 'In process'
    },
    credentialCardPrintDate: Date,
    nationality: String,
    masterCredentialCardNumber: String,
    verified: {
      type: Boolean,
      default: false
    },
    paidCredentialCard: {
      type: Boolean,
      default: false
    },
    deceasedDate: Date,
    //password part
    passwordResetToken: String,
    passwordResetExpires: String
  },
  //automatically added createdAt and updatedAt filed to Schema
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

userSchema.virtual('documents', {
  ref: 'Document',
  foreignField: 'user',
  localField: '_id'
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    this.password = await bcrypt.hash(this.password, 12);
  } catch (error) {
    return next(new APPError(error.message, 500));
  }

  next();
});

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);

    return JWTTimestamp < changedTimestamp;
  }
  //false means password not changed
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  //10 miniutes for password reset
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
