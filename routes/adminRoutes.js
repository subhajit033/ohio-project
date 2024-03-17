const express = require('express');
const { uploadByAdmin, setAnnouncement, getAnnouncement } = require('../controllers/uploadController');
const {protect, restrictTo } = require('../controllers/authControllers');
const upload = require('../utils/multer');

const router = express.Router();

router.post('/', upload.single('image'), uploadByAdmin);


router.get('/', (req, res) => {
  res.json({
    status: 'suceess'
  });
});

router.post('/setannouncement', protect, restrictTo('admin'), setAnnouncement);
router.get('/getannouncement', getAnnouncement);

module.exports = router;
