const express = require('express')
const {uploadByAdmin} = require('../controllers/uploadController')
const upload = require('../utils/multer')

const router = express.Router();

router.post('/', upload.single('image'), uploadByAdmin);

router.get('/', (req, res)=>{
    res.json({
        status:'suceess'
    })
})

module.exports = router;