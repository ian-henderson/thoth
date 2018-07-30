import { ApolloServer } from 'apollo-server-hapi';
import Hapi from 'hapi';

import typeDefs from './src/graph/rootSchema';
import resolvers from './src/graph/rootResolver';

const hapiServer = new Hapi.server({ port: 4000 });

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
  try {
    await apolloServer.applyMiddleware({ app: hapiServer });
    await apolloServer.installSubscriptionHandlers(hapiServer.listener);
    await hapiServer.start();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startServer();
