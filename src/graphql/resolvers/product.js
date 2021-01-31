const productService = require('../../services/product');
const resolvers = {
  Query: {
    Products: productService.getAllProducts
  },
  Mutation: {
    addProduct:productService.addProduct,
    updateProduct: productService.updateProduct, 
    deleteProduct: productService.deleteProduct
  }
};

module.exports = resolvers;

