
import { gql } from '@apollo/client';

export const SIGN = gql`
    mutation sign( $username: String!, $password: String!, $email: String, $type: String! ) {
        sign( username: $username, password: $password, email: $email, type: $type ) { 
            user {
                _id
                username
                email
            }
        }
    }
`;