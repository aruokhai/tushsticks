const Query = require('./query')
const Type = require('./type')
const Mutation = require('./mutation')
const resolvers = {
  Query,
  ...Type,
  Mutation
}

module.exports = resolvers