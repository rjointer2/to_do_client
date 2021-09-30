
import { gql } from '@apollo/client';

export const TODOS = gql`
    query ($offset: Int!, $limit: Int!) {
        todos(offset: $offset, limit: $limit) {
            id 
            createdBy {
                id
                username
            }
            subject
            completed
            todo
            createdAt
            didUserLike
            likedBy {
                id
            }
            comments {
                id
            }
        }
    }
`;

export const GET_TODO_BY_ID = gql`
    query( $id: String! ) {
        getTodoById( id: $id ) {
            id 
            createdBy {
                id
                username
            }
            subject
            completed
            todo
            createdAt
            didUserLike
            likedBy {
                id
            }
            comments {
                id
            }
        }
    }
`;

export const GET_TODOS_BY_USER = gql`
    query($id: String!) {
        userTodos(id: $id) {
            id
            username
            todos {
                id 
                createdBy {
                    id
                    username
                }
                subject
                completed
                todo
                createdAt
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