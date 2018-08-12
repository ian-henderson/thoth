import { makeExecutableSchema } from 'graphql-tools';
import Resources from './resources';
import resolvers from './rootResolver';

const resourceTypes = Resources.map(resource => resource.Schema);

const customDateType = `
  scalar Date
`;

const paginationTypes = `
  type PageInfo {
    hasNextPage: Boolean!
    endCursor: String
  }
`;

const queryTypes = `
  type Query {
    "Top Stories"
    topStories: StoriesConnection!
  }
`;

export default makeExecutableSchema({
  resolvers,
  typeDefs: [
    ...resourceTypes,
    customDateType,
    paginationTypes,
    queryTypes,
  ],
});
