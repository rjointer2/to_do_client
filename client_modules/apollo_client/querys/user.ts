
import { gql } from '@apollo/client';

export const ME = gql`
    {
        me {
            id
            email
            todos {
                _id
                completed
                subject
                todo
                dueDate
                createdBy {
                    id
                    username
                }
                likedBy {
                    id
                    username
                }
                didUserLike
            }
        }
    }
`;


/* 

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

*/
