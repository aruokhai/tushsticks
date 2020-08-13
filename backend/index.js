const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { readFileSync } = require('fs')
const typeDefs = readFileSync('./typeDefs.graphql', 'UTF-8')
const resolvers = require('./resolvers')
const Mongoose = require('mongoose')
const {Meal} = require('./models/meal')
const {Order} = require('./models/order')
const compression = require('compression');
const {join} = require('path');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

require('dotenv').config()

async function start() { 
  const MONGO_DB = process.env.DB_HOST
  const DIST_FOLDER = join(process.cwd(),'dist/client');
  const PORT = process.env.PORT || 4000;
  console.log(MONGO_DB);
  let app;
  let server;
  try {
    await Mongoose.connect(MONGO_DB,{dbName: 'tushsticks', useNewUrlParser: true});
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
  //app.use(compression);
  
  app.get('*.*',express.static(DIST_FOLDER, {
    maxAge: '1d'
  }));

  app.get('/', (req,res) => {
    res.sendFile(join(DIST_FOLDER,'index.html'))
  }
   );

   app.get('/*', (req,res) => {
    res.sendFile(join(DIST_FOLDER,'index.html'))
  }
   )

  // The `listen` method launches a web server.
  app.listen(PORT, () => {
    console.log(`🚀  Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  })

}
start();