import { User, Click } from './connectors';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export default resolvers = {
  // Queries from schema.js
  Query: {
    users(_, args) {
      return User.findAll({
        where: args
      });
    },
    clicks(_, args) {
      return Click.findAll({
        where: args
      });
    }
  },
  Mutation: {
    incrementClick(_, args) {
      User.find(args)
        .then(function(_user) {
          User.update({
            ClickCount: _user.get('ClickCount') + 1
          }, {
            where: args
          }).then(function() {
            return Click.create(args);
          }).catch(function() {
            throw new Error(`Could not update your click count`);
          });
          // All promises within handlers must have a return.
          // citation: http://goo.gl/rRqMUw
          return _user;
        }).catch(function() {
          throw new Error(`Could not find your account`);
        });
    }
  },
  // https://facebook.github.io/graphql/#sec-Naming-conventions
  // Handling of the 'scalar Date' from Schema.js
  Date: {
    __parseValue(value) {
      return new Date(value); // value from the client
    },
    __serialize(value) {
      return value.getTime(); // value sent to the client
    },
    __parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    }
  }
};