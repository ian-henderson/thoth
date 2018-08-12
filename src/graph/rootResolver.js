import Story from './stories';

const resolvers = {
  Query: {
    topStories: (_source, args, context) => Story.Item
      .getTopStories(args, context),
  },
};

export default resolvers;
