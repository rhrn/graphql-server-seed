const schema = `

type User {
  id: ID!
  # User email
  email: String!
  # User password
  password: String!
  # Random string
  random: String @deprecated(reason: "Not used")
}

type Query {
  user(id: String, email: String): User
}

schema {
  query: Query
}

`;

export default schema;
