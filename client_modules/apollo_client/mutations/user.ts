
import { gql } from '@apollo/client';

export const SIGN = gql`
    mutation ($username: String!, $password: String!, $type: String!) {
        sign(username: $username, password: $password, type: $type) {
            user {
                id
            }
        }
    }
`;