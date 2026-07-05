import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.REST_API}/graphql`,
  }),
  cache: new InMemoryCache(),
});
