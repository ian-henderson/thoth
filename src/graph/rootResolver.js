import Story from './stories';

const resolvers = {
  Query: {
    topStories: async (_source, _args, { dataSources }) => {
      const topStories = await dataSources.hackerNewsAPI.getTopStories();
      return topStories.map(doc => new Story.Item(doc));
    },
  },
};

export default resolvers;
