
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
    {
        user { 
            username
            todos {
                id
                username
            }
        }
    }
`;

