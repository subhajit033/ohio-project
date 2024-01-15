const express = require('express');
const { uploadFiles, uploadPhotos, uploadToClould, uploadPhotoToClould } = require('../controllers/uploadController');
const upload = require('../utils/multer');

const router = express.Router();

router.post('/:userId', uploadFiles, uploadToClould);
router.post('/', upload.single('uploadPhoto'), uploadPhotoToClould);
router.post('/admin', upload.single('file'), uploadPhotoToClould);
// router.post('/master', (req, res, next) => {
//     console.log("Fields:", req.body);
//     console.log("Files:", req.files);
//     upload.single('image')(req, res, next);
//   }, uploadToClould);

module.exports = router;
