import { ApolloServer } from 'apollo-server-hapi';
import { Server as HapiServer } from 'hapi';

import dataSources from './src/dataSources';
import schema from './src/graph';

const startServer = async () => {
  const apolloServer = new ApolloServer({ dataSources, schema });
  const hapiServer = new HapiServer({ port: 4000 });
  await apolloServer.applyMiddleware({ app: hapiServer });
  await apolloServer.installSubscriptionHandlers(hapiServer.listener);
  await hapiServer.start();
  console.log(`Hapi server running on port ${hapiServer.info.port}.`);
};

startServer().catch((error) => {
  console.log(error);
  process.exit(1);
});
