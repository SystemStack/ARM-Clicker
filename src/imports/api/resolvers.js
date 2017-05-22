import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import { User, Click } from './connectors';
export default resolvers = {
  // Queries from schema.js
  Query: {
    users(_, args) {
      return User.findAll({
        where: args
      }).then((_user) => {
        return _user;
      });
    },
    clicks(_, args) {
      return Click.findAll({
        where: args
      }).then((_clicks) => {
        return _clicks;
      });
    }
  },
  // Mutation implementation from schema.js
  Mutation: {
    // Create a user, does not need email initially
    createUser(_, args) {
      return User
        .create(args)
        .then((_user) => {
          return _user;
        }).catch(() => {
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
        }).then((_affectedRowCount) => {
          return _affectedRowCount;
        }).catch(() => {
          throw new Error(`Could not update your Email`);
        });
    },
    //Increments the click, and adds a click to the database at the time clicked
    incrementClick(_, args) {
      return User
        .find({ where: args })
        .then((_user) => {
          return User
            .update({
              ClickCount: _user.get('ClickCount') + 1
            }, {
              where: args
            }).then(() => {
              return Click.create({
                UserName: _user.get('UserName'),
                UserClickNumber: _user.get('ClickCount') + 1
              }).catch(() => {
                throw new Error(`Could not update your click count`);
              });
            }).catch(() => {
              throw new Error(`Could not update your click count`);
            });
        }).catch((err) => {
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