import Story from './stories';

const resolvers = {
  Query: {
    topStories: (_source, _args, context) => Story.Item.getTopStories(context),
  },
};

export default resolvers;
