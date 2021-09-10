
import { gql } from '@apollo/client';

export const TODOS = gql`
    query( $offset: Int!, $limit: Int! ) {
        todos( offset: $offset, limit: $limit ) {
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
`;


export const GET_TODO_BY_ID = gql`
    query( $id: String! ) {
        getTodoById( id: $id ) {
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
            comments {
                _id
                comment
                createdBy {
                    _id
                    username
                }
                createdAt
            }
        }
    }
`;