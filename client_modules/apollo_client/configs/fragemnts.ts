
import gql from "graphql-tag";

export const todoFragment = gql`
    fragment todos on Todo {
        id 
        createdBy {
            id
            username
            picture
        }
        subject
        completed
        todo
        createdAt
        didUserLike
        likedBy {
            id
        }
        comments {
            id
        }
    }
`;