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
    },
    updateProduct: async (parent, object) => {
      const product = await Product.findOne({_id:object.id});
      console.log('prod', product);
      if(!product) {
        throw new ProductNotFoundError(`Product with ID ${object.id} not found.`)
      }

      await Product.updateOne({_id:object.id},object);
      return await Product.findOne({_id:object.id});

    }
  }
};

module.exports = resolvers;

