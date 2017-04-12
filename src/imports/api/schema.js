// citation http://dev.apollodata.com/core/meteor.html#createApolloServer
// This schema contains a User that

export default `
  # Create User and Click models that reflect our DB schema
  # User: Because of our allowance for users to use either their email or a
  # handle, we will have to treat them as a composite key.
  type User {
    UserName  : String,
    Email     : String,
    ClickCount: Int,
    Clicks: [Click] # These are all of the "Click"s by a user
  }

  # UserLogin: Separation of purposes with this one, we don't want
  # users to be querying salts and hashes of each other.
  type UserLogin {
    UserName: String,
    Email: String,
    Salt: String,
    Hash: String,
    Token: String,
  }

  type Click {
    UserName: String,
    Email: String
  }

  # The schema allows the following query:
  type Query {
    clicks: [Click]
    UserName(UserName: String): User
    Email(Email: String): User
  }

  # Mutations to increase the click count of a user when a Click is added
  # @TODO mutation for if a user adds an email/username after account creation
  # We will need to update every click a user has.
  # Alternatively, we can use an auto-incremented ID because that will persist
  type Mutation {
    incrementClick (
      Email: String
    ): User
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
