import { useMutation } from "@apollo/client";
import { LIKE_TODO } from "../apollo_client/mutations/todo";
import { TODOS } from "../apollo_client/querys/todos";
import { USER_BY_ID } from "../apollo_client/querys/user";


export default function useLikeMutation() {

    const [ mutation ] = useMutation(LIKE_TODO, {
        refetchQueries: [
            USER_BY_ID, TODOS
        ]
    });

    const setLikeMutation = async ({ id, didLiked } : { id: string, didLiked: boolean }) => {

    try {
        await mutation({ 
            variables: { "id": id, "type": didLiked ? 'unlike' : 'like' },
        })
        console.log('hi')
    } catch(error) {
        console.log('oops')
    }

    }

    return { setLikeMutation }
}
