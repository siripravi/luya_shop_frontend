import { ApolloClient, InMemoryCache } from '@apollo/client/core';
const { PUBLIC_GRAPHQL_URL } = import.meta.env;
const client = new ApolloClient({
  uri: PUBLIC_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default client;