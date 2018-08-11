import { ApolloServer } from 'apollo-server-hapi';
import { Server as HapiServer } from 'hapi';

import dataSources from './src/dataSources';
import { resolvers, typeDefs } from './src/graph';


const startServer = async () => {
  const apolloServer = new ApolloServer({ dataSources, resolvers, typeDefs });
  const hapiServer = new HapiServer({ port: 4000 });
  await apolloServer.applyMiddleware({ app: hapiServer });
  await apolloServer.installSubscriptionHandlers(hapiServer.listener);
  await hapiServer.start();
};

startServer().catch(() => process.exit(1));
