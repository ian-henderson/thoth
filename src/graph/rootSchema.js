import { gql } from 'apollo-server-hapi';

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "Top Stories"
    topStories: [ID]
  }
`;

export default typeDefs;
