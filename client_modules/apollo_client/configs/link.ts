
import { createHttpLink } from "@apollo/client";

export const link = createHttpLink({
    uri: process.env.NODE_ENV === "development" ? "http://localhost:3473/graphql" : ""
})