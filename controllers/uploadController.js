const upload = require('../utils/multer');
const { uploadOnclould } = require('../utils/cloudinary');
const path = require('path');
const APPError = require('../utils/appError');
const Document = require('../models/documentModel');
const Announcement = require('../models/announcementModel');
const { default: mongoose } = require('mongoose');

const uploadFiles = upload.single('upload_file');

const uploadPhotos = upload.single('uploadPhoto');

const uploadToClould = async (req, res, next) => {
  try {
    const postUrl = await uploadOnclould(req.filename, false);
    if (!postUrl) return next(new APPError('Please provide file name', 404));

    const doc = { ...req.body, user: req.params.userId, url: postUrl };
    console.log(doc.name, doc.user);
    const prevDoc = await Document.findOne({ name: doc.name, user: doc.user, fileType: { $ne: 'Archive' } });
    console.log(prevDoc);
    if (prevDoc) {
      await Document.findByIdAndUpdate(
        prevDoc._id,
        { fileType: 'Archive' },
        {
          new: true,
          runValidators: true
        }
      );
    }
    await Document.create(doc);
    res.status(200).json({
      url: postUrl
    });
  } catch (err) {
    return next(new APPError(err.message, 400));
  }
};
const uploadPhotoToClould = async (req, res, next) => {
  try {
    const postUrl = await uploadOnclould(req.filename, true);
    if (!postUrl) return next(new APPError('Please provide file name', 404));

    res.status(200).json({
      status: true,
      url: postUrl
    });
  } catch (err) {
    console.log(err);
    return next(new APPError(err.message, 400));
  }
};

const uploadByAdmin = async (req, res, next) => {
  try {
    const postUrl = await uploadOnclould(req.filename, false);
    if (!postUrl) return next(new APPError('Please provide file name', 404));

    res.status(200).json({
      success: 1,
      file: {
        url: postUrl
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: 0
    });
  }
};

const setAnnouncement = async (req, res, next) => {
  try {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);

    const announcement = await Announcement.findOne({
      expiresAt: { $gte: now, $lte: tomorrow }
    });

    if (announcement) {
      return next(new APPError('One announcement can be set within a day'), 400);
    }

    await Announcement.create(req.body);
    res.status(200).json({
      status: true
    });
  } catch (err) {
    next(new APPError(err.message, 400));
  }
};

const getAnnouncement = async (req, res, next) => {
  try {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);

    const announcement = await Announcement.findOne({
      expiresAt: { $gte: now, $lte: tomorrow }
    });

    if (!announcement) {
      return res.status(404).json({ message: 'No announcement found' });
    }

    res.status(200).json({ announcement });
  } catch (err) {
    next(new APPError(err.message, 400));
  }
};

module.exports = {
  uploadFiles,
  uploadToClould,
  uploadPhotoToClould,
  uploadPhotos,
  uploadByAdmin,
  setAnnouncement,
  getAnnouncement
};
