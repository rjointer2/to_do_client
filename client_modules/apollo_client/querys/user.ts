
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

