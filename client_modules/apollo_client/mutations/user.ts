
import { gql } from '@apollo/client';

export const SIGN = gql`
    mutation ($username: String!, $password: String!, $type: String!, $email: String) {
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

export const UPDATE_USER = gql`
    mutation ($username: String, $password: String, $email: String, $id: String! $confirmPassword: String!) {
        updateUser ( username: $username, password: $password, email: $email, confirmPassword: $confirmPassword ) {
            id
        }
    }
`;

export const DELETE_USER = gql`
    mutation ( $password: String! ) {
        deleteUser ( password: $password ) {
            id
        }
    }
`;