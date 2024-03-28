const { model, Schema, default: mongoose } = require('mongoose');

const bookingSchema = new Schema({
  user: {
    required: true,
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  product: {
    required: true,
    type: mongoose.Schema.ObjectId,
    ref: 'Product'
  }
});

const Booking = model('Booking', bookingSchema);

module.exports = Booking;
