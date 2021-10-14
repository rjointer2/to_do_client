
import { gql, InMemoryCache } from "@apollo/client";
import { Todo } from "../../types";
import { todoFragment } from "./fragemnts";

const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          todos: {
            keyArgs: ["_id"],
            merge(existing = [], incoming: Array<Todo>, { isReference, cache, variables }) {
              // the incoming is the same array as the first fetch so tru in the varaibles + 10 here
              return [
                ...existing ?? [],
                ...incoming.map(x => {
                  if (!isReference(x)) {
                    return x; // it's already a data object
                  } else {
                    // convert the Reference to a data object
                    return cache.readFragment({
                      fragment: todoFragment, // use a fragment with all properties on todo
                      id: cache.identify(x),
                      // only relevant if the objects' fields use variables
                      variables,
                    });
                  }
                }),
              ];
            }
          }
        }
      }
    }
});

export default cache