import { ClickPost, LoginPost } from './connectors';

// create the resolve functions for the available GraphQL queries
export default resolvers = {
  User: {

  },

  UserLogin: {

  },

  Click: {

  },

  Query: {
    clicks() {
      return clicks;
    },
  },

  Mutation: {
    incrementClick(_, { email }) {
      let _user = find(User, { Email: email });
      if(!_user) {
        throw new Error(`Could not find your account with Email ${email}`);
      }
      _user.ClickCount += 1;
      return _user;
    },
  },
};