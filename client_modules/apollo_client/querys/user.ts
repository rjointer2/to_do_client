
import { gql } from '@apollo/client';

export const ME = gql`
    {
        me {
            _id
            username
            email
            todos {
                _id
                completed
                subject
                todo
                dueDate
                createdBy {
                    _id
                    username
                }
                likedBy {
                    _id
                    username
                }
                didUserLike
            }
        }
    }
`;