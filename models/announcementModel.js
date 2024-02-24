const mongoose = require('mongoose');

const announcementSchemea = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  expiresAt: {
    type: Date,
    default: Date.now() + 86400000
  }
});

const Announcement = mongoose.model('Announcement', announcementSchemea);
module.exports = Announcement;
