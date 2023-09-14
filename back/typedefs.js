import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [User]
    quotes: [Quote]
    user(id: ID!): User
    quotesByUser(by: ID!): [Quote]
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
    signupUser(name: String!, email: String!): User
    addQuoteById(quoteInput: QuoteInput): [Quote]
  }
  input QuoteInput {
    by: ID!
    quote: String!
  }
`;

export default typeDefs;
