// citation http://dev.apollodata.com/core/meteor.html#createApolloServer

export default `
  # Date is handeled in Resolvers.js
  scalar Date
  # Create User and Click models that reflect our DB schema
  type User {
    id: Int
    UserName: String
    Email: String
    ClickCount: Int
    Clicks: [Click] # These are all of the Clicks by a user
  }

  # Define a TimeClicked Custom Scalar type
  type Click {
    id: Int
    UserID: Int
    TimeClicked: Date
  }

  # This is the format for the queries in resolvers.js
  type Query {
    clicks(UserID: Int): [Click]
    users(UserName: String): [User]
  }

  # Mutations to increase the click count of a user when a Click is added
  # @TODO mutation for if a user adds an email after account creation
  type Mutation {
    incrementClick (
      UserID: Int
    ): User
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
