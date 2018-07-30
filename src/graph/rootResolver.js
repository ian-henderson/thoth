// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    topStories: async (_source, _args, { dataSources }) => {
      console.log('fuck')
      const result = await dataSources.hackerNewsAPI.getTopStories();
      console.lot(result);
      return result;
    },
  },
};

export default resolvers;
