// citation http://dev.apollodata.com/core/meteor.html#createApolloServer

export default `
  # Date is handeled in Resolvers.js
  scalar Date
  # Create User and Click models that reflect our DB schema
  type User {
    UserID     : Int
    UserName   : String
    Email      : String
    ClickCount : Int
    Clicks     : [Click] # These are all of the Clicks by a user
  }

  # Define a TimeClicked Custom Scalar type
  type Click {
    TimeClicked : Date
    user        : User
  }

  # This is the format for the queries in resolvers.js
  type Query {
    users(UserName: String, Email: String) : [User]
    clicks(UserID: Int)                    : [Click]
  }

  type Mutation {
    createUser (
      UserName : String,
      Email    : String
    ): User

    updateEmail (
      UserName : String,
      Email    : String
    ): User

    # Mutations to increase the click count of a user and
    # adds a click to the Click table
    incrementClick (
      UserID      : Int,
      TimeClicked : Date
    ): Click
  }

  schema {
    query    : Query
    mutation : Mutation
  }
`;
