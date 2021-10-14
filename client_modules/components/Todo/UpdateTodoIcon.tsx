
// react and hooks
import React, { Dispatch, SetStateAction, useState } from 'react'

// apollo
import { UPDATE_TODO } from '../../apollo_client/mutations/todo';
import { useMutation } from '@apollo/client';
import { TODOS } from '../../apollo_client/querys/todos';

// styles
import { Card_Info_Top_Master, Card_TextArea } from '../../styled_components/aligment'
import { EditIcon } from '../../styled_components/assets'


export default function UpdateTodoIcons({ state, setState, todoBody, todoId }: { state: boolean, setState: Dispatch<SetStateAction<boolean>>, todoId: string, todoBody: string }) {

    const [ value, setValue ] = useState("");
    const [updateTodo] = useMutation(UPDATE_TODO, {
        refetchQueries: [ TODOS ]
    });

    return (
        <div>
            { state ? <Card_TextArea placeholder='Edit Here...' onChange={(e: React.ChangeEvent<HTMLInputElement> ) => setValue(e.target.value)} /> : todoBody }     
            { state && <>
                <Card_Info_Top_Master>
                    <EditIcon onClick={ async () => {
                        try {
                            await updateTodo({
                                variables: { "id": todoId, "option": "todo", "value": value }
                            })
                            setState(s => !s)
                            console.log('yes!')
                        } catch(err) {
                            console.log(err)
                        }
                    }} /> &nbsp; Submit Changes 
                </Card_Info_Top_Master>
            </> }
        </div>
    )
}
