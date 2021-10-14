
import { gql } from '@apollo/client';
import { todoFragment } from '../configs/fragemnts';

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
            picture
        }
    }
`;

export const USER_BY_ID = gql`
    ${todoFragment}
    query($id: String!) {
        user(id: $id) {
            username
            id
            email
            todos {
               ...todos
            }
            picture
        }
    }
`;
