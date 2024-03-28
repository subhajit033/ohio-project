const dotenv = require("dotenv");
dotenv.config();

const {Router} = require('express');
const {protect} = require('../controllers/authControllers')
const {getCheckOutSession} = require('../controllers/bookingController')

const router = Router();

router.get('/checkout/:pdtId', protect, getCheckOutSession);

module.exports = router;


