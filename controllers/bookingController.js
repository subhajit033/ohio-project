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
    console.log(tour.price);
    const customer = await stripe.customers.create({
      name: 'Jenny Rosen',
      email: 'jennyrosen@example.com',
      address: {
        line1: '510 Townsend St',
        postal_code: '98140',
        city: 'San Francisco',
        state: 'CA',
        country: 'US',
      },
    });
    console.log(customer);
    
    const price = await stripe.prices.create({
      currency: 'inr',
      unit_amount: tour.price * 100,

      product_data: {
        name: `${tour.name}`
      },
      metadata: {
        description: tour.description,
        images: 'https://th.bing.com/th/id/OIP.YHFMsettT35moUDjgKMmVgHaE8?pid=ImgDet&rs=1'
      }
    });

    // console.log(price);

    const session = await stripe.checkout.sessions.create({
      line_items: [
        //new in stripe
        {
          price: price.id,
          quantity: 1
        }
      ],
      mode: 'payment',
      payment_method_types: ['card'],
      //not a secure way, in deployed websoute we can integrate stripe webkooks for payment success
      // success_url: `${req.protocol}://${req.get('host')}`,
      success_url: `http://localhost:5173/dashboard`,
      // cancel_url: `${req.protocol}://${req.get('host')}`,
      cancel_url: `http://localhost:5173`,
      
      billing_address_collection: 'required',
      //customer_name: req.user.name,
      customer: customer.id,
      // customer_email: customer.email,
      //during accessing single doc id is always id not _id
      client_reference_id: tour.id,
      metadata: {
        tourId: tour.id
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

const createBookingCheckout = async (sessionData) => {
  //all the data required during checkout will be received here after successful payment
  const product = sessionData.metadata.tourId || sessionData.client_reference_id;
  const user = (await User.findOne({ primaryEmail: sessionData.customer_email })).id;
  // const price = sessionData.amount_total / 100;
  await Booking.create({ product, user });
};

const webhookCheckout = async (req, res, next) => {
  const endpointSecret = process.env.WEBHOOK_SECRET;
  const sig = req.headers['stripe-signature'];
  //this body need to be in raw form
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.log(err);
    return res.status(400).send(`webhook error - ${err.message}`);
  }
  if (event.type === 'checkout.session.completed') {
    console.log(event.data.object);
    createBookingCheckout(event.data.object);
  }
  res.status(200).json({
    received: true
  });
};

module.exports = { getCheckOutSession, webhookCheckout };
