import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: `${process.env.REST_API}/graphql`,
  cache: new InMemoryCache(),
});
