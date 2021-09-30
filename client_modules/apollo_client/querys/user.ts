
import { gql } from '@apollo/client';

export const ME = gql`
    {
        me {
            username
            id
            email
            todos {
                createdBy {
                    id
                }
                didUserLike
            }
        }
    }
`;

export const USER_BY_ID = gql`
    query($id: String!) {
        user(id: $id) {
            username
            id
            email
            todos {
                id 
                createdBy {
                    id
                    username
                }
                todo
                subject
                completed
                didUserLike
                likedBy {
                    id
                }
                comments {
                    id
                }
            }
        }
    }
`;
