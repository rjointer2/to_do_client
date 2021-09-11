
import { gql } from '@apollo/client';

export const ADD_TODO = gql`
    mutation addTodo( $completed: Boolean, $subject: String!, $todo: String!, $likedBy: String!, $createdBy: String!, $dueDate: String! , $comments: String! ) {
        addTodo( completed: $completed, subject: $subject, todo: $todo, likedBy: $likedBy, createdBy: $createdBy, dueDate: $dueDate, comments: $comments ) {
            completed
        }
    }
`;

export const LIKE_TODO = gql`
    mutation likeTodo( $id: String!, $type: String! ) {
        likeTodo( id: $id, type: $type ) {
            _id
        }
    }
`;