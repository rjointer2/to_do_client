
import { gql } from '@apollo/client';

export const SIGN = gql`
    mutation ($username: String!, $password: String!, $type: String!, $email: String!) {
        sign(username: $username, password: $password, type: $type, email: $email ) {
            user {
                id
            }
        }
    }
`;

export const SEARCH_USER = gql`
    mutation ( $value: String! ) {
        searchUsers( value: $value ) {
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