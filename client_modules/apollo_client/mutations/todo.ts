
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

export const UPDATE_TODO = gql`
    mutation updateTodo( $option: String!, $id: String!, $value: String! ) {
        updateTodo( option: $option, id: $id, value: $value ) {
            id
        }
    }
`;

export const DELETE_TODO = gql`
    mutation deleteTodo( $id: String! ) {
        deleteTodo( id: $id ) {
            id
            
        }
    }
`;