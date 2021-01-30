const {gql} = require('apollo-server-express');

const productSchema = gql`
  type Product {
    _id: ID,
    name: String,
    price: Float,
    imageUrl: String
  },
  type Query {
    Products: [Product]
  },
  type Mutation {
    addProduct(name: String!, price: Float!, imageUrl: String!): Product,
    updateProduct(id:ID!, name: String, price: Float, imageUrl: String): Product,
    deleteProduct(id:ID!): String
  }`;

  module.exports = productSchema;
