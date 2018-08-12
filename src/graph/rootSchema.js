import { makeExecutableSchema } from 'graphql-tools';
import Resources from './resources';
import resolvers from './rootResolver';

const resourceTypes = Resources.map(resource => resource.Schema);

const customDateType = `
  scalar Date
`;

const queryTypes = `
  type Query {
    "Top Stories"
    topStories: [Story]
  }
`;

export default makeExecutableSchema({
  resolvers,
  typeDefs: [
    ...resourceTypes,
    customDateType,
    queryTypes,
  ],
});
