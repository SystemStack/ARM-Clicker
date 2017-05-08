// citation http://dev.apollodata.com/core/meteor.html#createApolloServer
// #-comments show up in :3000/graphiql interface
export default `
  # The Date scalar is a datetime object in our MySQL database
  # Note: Value is stored in the database in UTC time but retrieved
  # in your local time
  scalar Date

  # A User has a unique ID and unique Username.
  type User {
    UserID     : Int
    UserName   : String
    Email      : String
    ClickCount : Int
    Clicks     : [Click] # These are all of the Clicks by a user
  }

  # A UserID is stored in our MySQL datatbase and creates a link between
  # this table and the User table.
  type Click {
    TimeClicked     : Date
    UserClickNumber : Int
    user            : User
  }

  # This is the format for the queries in resolvers.js
  type Query {
    users(UserName: String, Email: String) : [User]
    clicks(UserID: Int)                    : [Click]
  }

  type Mutation {
    # Creates a user with an optional Email
    createUser (
      UserName : String!,
      Email    : String
    ): User

    # Updates a users email by their username
    # MySQL updates can only return rows effected (0|1)
    updateEmail (
      UserName : String!,
      Email    : String!
    ): Int

    # Mutations to increase the click count of a user and
    # adds a click to the Click table
    incrementClick (
      UserID : Int!
    ): Click
  }

  schema {
    query    : Query
    mutation : Mutation
  }
`;