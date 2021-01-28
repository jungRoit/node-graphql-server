require('./env');
const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const mongoose = require('./db/index');
const  productSchema = require('./graphql/schemas/product');
const productResolver = require('./graphql/resolvers/product');

const server = new ApolloServer({typeDefs:productSchema, resolvers:productResolver});
const app = express();

server.applyMiddleware({app});

app.listen({port:'9000'},()=> {
  console.log('App running in port 9000');
})
