const { model, Schema } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price:{
    type: String,
    required: true
  }
});

const Product = model('Product', productSchema);

module.exports = Product;
