const Booking = require('../models/BookingModel');
const User = require('../models/userSchema');
const Product = require('../models/productModel');
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const APPError = require('../utils/appError');
const getCheckOutSession = async (req, res, next) => {
  /**
   * 1) get currently booked tour
   * 2)create a checkout session
   * 3)send it to client
   */
  try {
    const tour = await Product.findById(req.params.pdtId);
    const price = await stripe.prices.create({
      currency: 'usd',
      unit_amount: 1000,
      // recurring: {
      //   interval: 'month',
      // },
      product_data: {
        name: `${tour.name}`,
        // description: tour.description,
        // images: ['https://th.bing.com/th/id/OIP.YHFMsettT35moUDjgKMmVgHaE8?pid=ImgDet&rs=1']
      }
    });

    console.log(price);

    const session = await stripe.checkout.sessions.create({
      line_items: [
        //new in stripe
        {
          price: price.id,
          // product_data: {
          //   name: `${tour.name}`,
          //   description: tour.description,
          //   images: ['https://th.bing.com/th/id/OIP.YHFMsettT35moUDjgKMmVgHaE8?pid=ImgDet&rs=1']
          // }
          quantity: 1
        }
      ],
      mode: 'payment',
      payment_method_types: ['card'],
      //not a secure way, in deployed websoute we can integrate stripe webkooks for payment success
      success_url: `${req.protocol}://${req.get('host')}`,
      cancel_url: `${req.protocol}://${req.get('host')}`,
      //customer_name: req.user.name,
      customer_email: req.user.primaryEmail,
      //during accessing single doc id is always id not _id
      client_reference_id: tour._id,
      metadata: {
        tourId: tour._id
      }
    });
    res.status(200).json({
      status: 'success',
      session
    });
  } catch (err) {
    console.log(err);
    next(new APPError(err.message, 400));
  }
};

module.exports = { getCheckOutSession };
