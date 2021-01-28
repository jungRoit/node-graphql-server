const Product = require('../../models/product');

const resolvers = {
  Query: {
    Products: Product.find({})
  },
  Mutation: {
    addProduct: (parent,productObj) => {
      const product = new Product(productObj);

      return product.save();
    }
  }
};

module.exports = resolvers;

