 import { User, Click } from './connectors';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export default resolvers = {
  // Queries from
  Query: {
    users(_, args) {
      return User.findAll({where: args});
    },
    clicks(_, args) {
      return Click.findAll({where: args});
    }
  },
  Mutation: {
    incrementClick(_, { args }) {
      // let _user = findUserByID(testUser, { UserID: userID });
      // if(!_user) {
      //   throw new Error(`Could not find your account`);
      // }
      // _user.ClickCount += 1;
      // console.log("incrementClick", _user)
      return Click.create(args);
    },
  },
  // https://facebook.github.io/graphql/#sec-Naming-conventions
  // Handling of the Date scalar from Schema.js
  Date: {
    __parseValue(value) {
      console.log("parseValue", value)
      return new Date(value); // value from the client
    },
    __serialize(value) {
      //Sat Apr 22 2017 17:41:45 GMT-0500 (Central Daylight Time)
      return value.getTime(); // value sent to the client
    },
    __parseLiteral(ast) {
      console.log("parseLiteral", ast)
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    }
  }
};