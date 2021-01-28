const {Schema, model} = require('mongoose');

const schema = new Schema({
  name: String,
  price: Number,
  imageUrl: String
});

const Product = model('products',schema);

module.exports = Product;