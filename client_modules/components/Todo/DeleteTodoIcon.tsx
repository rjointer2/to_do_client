
// react
import React, { Dispatch, SetStateAction } from 'react'

// apollo 
import { DELETE_TODO } from '../../apollo_client/mutations/todo';
import { TODOS } from '../../apollo_client/querys/todos';
import { ApolloError, useMutation } from '@apollo/client';

// styles
import { Card_Info_Top_Item } from '../../styled_components/aligment'
import { EditIcon, TrashIcon } from '../../styled_components/assets'

export default function DeleteTodoIcon({ setState, todoId } : { setState: Dispatch<SetStateAction<boolean>>, todoId: string }) {

    const [deleteTodo] = useMutation(DELETE_TODO, {
        refetchQueries: [ TODOS ]
    });


    return (
        <>
            <Card_Info_Top_Item>
                <EditIcon onClick={() => setState(s => !s)} />
            </Card_Info_Top_Item>
            <Card_Info_Top_Item>
                <TrashIcon onClick={ async () => {
                    try {
                        await deleteTodo({
                            variables: { "id": todoId }
                        })
                    } catch(err) {
                        const error = err as unknown as ApolloError
                        console.log(error.message)
                    }
                }} />
            </Card_Info_Top_Item>
        </>
    )
}
