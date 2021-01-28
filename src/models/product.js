const {Schema, model} = require('mongoose');

const schema = new Schema({
  name: String,
  price: Number,
  imageUrl: String
});

const Product = model('product',schema);

module.exports = Product;