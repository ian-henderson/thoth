import { gql } from 'apollo-server-hapi';

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

export default typeDefs;
