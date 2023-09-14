import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [User]
    quotes: [Quote]
  }
  type User {
    id: ID
    name: String
    email: String
    quotes: [Quote]
  }
  type Quote {
    quote: String
    by: ID
  }
  type Mutation {
    addUser(newUser: NewUser): User
    addQuoteByUserId(newQuote: NewQuote): [Quote]
  }
  input NewUser {
    name: String
    email: String
  }
  input NewQuote {
    by: ID!
    quote: String
  }
`;

export default typeDefs;
