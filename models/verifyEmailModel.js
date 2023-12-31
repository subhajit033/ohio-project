const mongoose = require('mongoose');

const verifyEmailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const VerifyUserEmail = mongoose.model('VerifyUserEmail', verifyEmailSchema);
module.exports = VerifyUserEmail;
