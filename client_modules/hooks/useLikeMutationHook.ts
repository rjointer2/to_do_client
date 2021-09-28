import { useMutation } from "@apollo/client";
import { LIKE_TODO } from "../apollo_client/mutations/todo";
import { TODOS } from "../apollo_client/querys/todos";


export default function useLikeMutation() {

    const [ mutation ] = useMutation(LIKE_TODO, {
        refetchQueries: [
            TODOS
        ]
    });

    const setLikeMutation = async ({ id, didLiked } : { id: string, didLiked: boolean }) => {

    try {
        await mutation({ 
            variables: { "id": id, "type": didLiked ? 'unlike' : 'like' }
        })
        console.log('hi')
    } catch(error) {
        console.log('oops')
    }

    }

    return { setLikeMutation }
}
