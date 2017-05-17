import resolvers from '/imports/api/resolvers';
import typeDefs from '/imports/api/schema';
import { AccountsServer } from 'meteor/accounts-base';
import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

_createUser = (user) => {
  // Create a user our MySQL DB using our API
  // user.emails === [ {address: String, verified: Boolean},...]
  let _user = {
    Email: user.emails[0].address,
    UserName: user.username
  };

  resolvers.Mutation.createUser(this, _user);
}

Accounts.onCreateUser((options, user) => {
  // This middleware is called on registration to be inserted into our MySQL DB
  _createUser(user);
  // onCreateUser always expects a user back
  return user;
});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const apolloServer = createApolloServer({
  schema
});