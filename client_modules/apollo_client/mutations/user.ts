
import { gql } from '@apollo/client';
import { todoFragment } from '../configs/fragemnts';

export const SIGN = gql`
    mutation ($username: String, $password: String, $type: String!, $email: String) {
        sign(username: $username, password: $password, type: $type, email: $email ) {
            token
        }
    }
`;

export const SEARCH_USER = gql`
    ${todoFragment}
    mutation ( $value: String! ) {
        searchUsers( value: $value ) {
            username
            id
            email
            todos {
                ...todos
            }
        }
    }
`;

export const UPDATE_USER = gql`
    mutation ($username: String, $password: String, $email: String, $confirmPassword: String!, $picture: String) {
        updateUser ( username: $username, password: $password, email: $email, confirmPassword: $confirmPassword, picture: $picture ) {
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