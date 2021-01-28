const Product = require('../../models/product');

const resolvers = {
  Query: {
    Products: () => Product.find({})
  },
  Mutation: {
    addProduct: (parent,object) => {
      console.log('add prod', object);
      const product = new Product(object);

      return product.save();
    }
  }
};

module.exports = resolvers;

