require('./env');
const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const mongoose = require('./db/index');
const  productSchema = require('./graphql/schemas/product');
const productResolver = require('./graphql/resolvers/product');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = new ApolloServer({typeDefs:productSchema, resolvers:productResolver});
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

server.applyMiddleware({app});

app.listen({port:process.env.PORT || 9000},()=> {
  console.log('App running in port 9000');
})
