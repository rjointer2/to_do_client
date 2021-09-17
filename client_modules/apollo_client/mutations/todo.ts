
import { gql } from '@apollo/client';

export const ADD_TODO = gql`
    mutation addTodo( $subject: String!, $todo: String!, $dueDate: String! ) {
        addTodo( subject: $subject, todo: $todo, dueDate: $dueDate ) {
            id
        }
    }
`;

export const LIKE_TODO = gql`
    mutation likeTodo( $id: String!, $type: String! ) {
        likeTodo( id: $id, type: $type ) {
            id
        }
    }
`;