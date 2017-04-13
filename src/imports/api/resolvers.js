// import { ClickPost, LoginPost } from './connectors';
import { testUser, testLogin, testClick } from './connectors';



// create the resolve functions for the available GraphQL queries
export default resolvers = {

  Query: {
    userQuery(_, args){
        return testUser.findAll({where: args});
    },
  },
  Mutation: {
    incrementClick(_, { userID }) {
      let _user = find(testUser, { UserID: userID });
      if(!_user) {
        throw new Error(`Could not find your account`);
      }
      _user.ClickCount += 1;
      return _user;
    },
  },
};