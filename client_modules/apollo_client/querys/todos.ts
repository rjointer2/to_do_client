
import { gql } from '@apollo/client';
import { todoFragment } from '../configs/fragemnts';

export const TODOS = gql`
    ${todoFragment}
    query ($offset: Int!, $limit: Int!) {
        todos(offset: $offset, limit: $limit) {
           ...todos
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
                picture
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
                createdBy {
                    id
                    username
                    picture
                }
                createdAt
                comment
            }
        }
    }
`;

export const GET_TODOS_BY_USER = gql`
    ${todoFragment}
    query($id: String!) {
        userTodos(id: $id) {
            id
            username
            todos {
                ...todos
            }
        }
    }
`;