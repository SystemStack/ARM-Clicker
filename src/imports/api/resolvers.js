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
  // Mutation implementation from schema.js
  Mutation: {
    // Create a user, does not need email initially
    createUser(_, args) {
      return User
        .create(args)
        .then(function (_user) {
          return _user;
        }).catch(function () {
          throw new Error(`Could not create your account (UserName or Email already exists)`);
        });
    },
    // Update a users email in case they did not set one on register
    updateEmail(_, args) {
      return User
        .update({
          Email: args.Email
        }, {
          where: {
            UserName: args.UserName
          }
        }).then(function (_affected) {
          return _affected;
        }).catch(function () {
          throw new Error(`Could not update your Email`);
        });
    },
    //Increments the click, and adds a click to the database at the time clicked
    incrementClick(_, args) {
      return User
        .find({ where: args })
        .then(function (_user) {
          return User
            .update({
              ClickCount: _user.get('ClickCount') + 1
            }, {
              where: args
            }).then(function () {
              return Click.create({
                UserID: args.UserID,
                UserClickNumber: _user.get('ClickCount') + 1
              }).catch(function () {
                throw new Error(`Could not update your click count`);
              });
            }).catch(function () {
              throw new Error(`Could not update your click count`);
            });
        }).catch(function () {
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
        return parseInt(ast.value, 10);
      }
      return null;
    }
  }
};