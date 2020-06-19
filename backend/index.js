const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { readFileSync } = require('fs')
const typeDefs = readFileSync('./typeDefs.graphql', 'UTF-8')
const resolvers = require('./resolvers')
const Mongoose = require('mongoose')
const {Meal} = require('./models/meal')
const {Order} = require('./models/order')


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

require('dotenv').config()

async function start() { 
  const MONGO_DB = process.env.DB_HOST
  console.log(MONGO_DB);
  let app;
  let server;
  try {
    await Mongoose.connect(MONGO_DB, { useUnifiedTopology: true })
    let db = {Meal, Order}
    server = new ApolloServer({ 
      typeDefs,
      resolvers,
      introspection: true,
      playground: process.env.DEVELOPMENT,
      context: async ({ req }) => {
        return { db }
      } 
    });
    app = express();
    server.applyMiddleware({ app })

  } catch (error) {
    console.log(error)
    process.exit(1)
  }

  app.get('/', (req, res) => {
      res.send("hello world");
    })



  // The `listen` method launches a web server.
  app.listen({port: 4000}, () => {
    console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`);
  })

}
start();