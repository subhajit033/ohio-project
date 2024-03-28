const Product = require('../models/productModel');
const APPError  = require('../utils/appError')

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    // console.log(products);
    res.status(200).json({
      status: 'success',
      products
    });
  } catch (err) {
    next(new APPError(err.message, 400))
  }
};

module.exports = { getProducts };
