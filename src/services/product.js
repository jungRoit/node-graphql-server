const Product = require('../models/product');

const addProduct = (parent,body) => {
  try {
    const product = new Product(body);

    return product.save();
  } catch (error) {
    throw new Error(`Error creating Product`)
  }
}

const updateProduct = async (parent, body) => {
  try {
    const product = await Product.findOne({_id:body.id});
    console.log('prod', product);
    if(!product) {
      throw new Error(`Product with ID ${body.id} not found.`)
    }

    await Product.updateOne({_id:body.id},body);
    return await Product.findOne({_id:body.id});
  } catch (error) {
    throw new Error(`Error updating Product.`)
  }
}

const getAllProducts = async (parent, variables) => {
  try {
    const limit = variables.limit || 5;
    const offset = variables.offset || 0;
    return await Product.find({}).sort([[variables.sortBy || 'name', variables.order || 'asc']]).skip(offset).limit(limit);
  } catch (error) {
    throw new Error(`Error fetching Products.`)
  }
}

const deleteProduct = async (parent,body) => {
  try {
    const response =await  Product.deleteOne({_id:body.id});
    return 'success';
  } catch (error) {
    throw new Error(`Error deleting Product.`)
  }
}

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  getAllProducts
}