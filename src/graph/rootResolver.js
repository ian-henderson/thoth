const resolvers = {
  Query: {
    topStories: async (_source, _args, { dataSources }) =>
      dataSources.hackerNewsAPI.getTopStories(),
  },
};

export default resolvers;
