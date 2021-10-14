
import { ApolloClient, createHttpLink } from "@apollo/client";
import cache from "./cache";

const httpLink = createHttpLink({
    uri: process.env.NODE_ENV === "development" ? "http://localhost:4562/graphql" : "https://todoserverroody.herokuapp.com/graphql"
  });

const client = new ApolloClient({
    cache,
    link: httpLink
})

export default client;