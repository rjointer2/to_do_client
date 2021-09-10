
import { gql, InMemoryCache } from "@apollo/client";

const todoFragment = gql`
  fragment todos on Todo {
    _id
    completed
    subject
    todo
    dueDate
    createdBy {
        _id
        username
    }
    likedBy {
        _id
        username
    }
    didUserLike
  }
`;

const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          todos: {
            keyArgs: ["_id"],
            merge(existing = [], incoming: Array<any>, { isReference, cache, variables }) {
              console.log(existing)
              // the incoming is the same array as the first fetch so tru in the varaibles + 10 here
              console.log(variables)
              return [
                ...existing ?? [],
                ...incoming.map(x => {
                  if (!isReference(x)) {
                    console.log('this', x)
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