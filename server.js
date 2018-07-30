import { ApolloServer } from 'apollo-server-hapi';
import Hapi from 'hapi';

import dataSources from './src/dataSources';
import { resolvers, typeDefs } from './src/graph';

const apolloServer = new ApolloServer({ dataSources, resolvers, typeDefs });

const hapiServer = new Hapi.server({ port: 4000 });

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
