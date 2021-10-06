
import { gql } from '@apollo/client';

export const ADD_COMMENT = gql`
    mutation addComment( $createdBy: String!, $comment: String!, $todoID: String! ) {
        addComment( createdBy: $createdBy, comment: $comment, todoID: $todoID ) {
            comment
            id
        }
    }
`;

export const DELETE_COMMENT = gql`
    mutation deleteComment( $id: String! ) {
        deleteComment( id: $id ) {
            comment
        }
    }
`;