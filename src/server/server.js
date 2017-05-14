import resolvers from '/imports/api/resolvers';
import typeDefs from '/imports/api/schema';
import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
createApolloServer({
  schema
});