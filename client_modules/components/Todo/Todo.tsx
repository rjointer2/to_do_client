
import React, { useEffect, useState } from 'react'
import { Card_Context, Card_Info_Top_Item, Card_Info_Top_Master, Card_Master, Card_TextArea, Forum_Actions, Forum_Action_Items, Forum_Assest_Header } from '../../styled_components/aligment';
import { AvatarCircle, CommentBubble, EditIcon, LikedHeart, StatusDot, TrashIcon, UnlikedHeart } from '../../styled_components/assets';
import Link from "next/link";
import useLikeMutation from '../../hooks/useLikeMutationHook';
import { useMutation } from '@apollo/client';
import { DELETE_TODO, UPDATE_TODO } from '../../apollo_client/mutations/todo';
import { TODOS } from '../../apollo_client/querys/todos';
import { USER_BY_ID } from '../../apollo_client/querys/user';

export default function Todos({ todo, userID } : { todo: any, userID: any }) {

    const [ canEdit, setCanEdit ] = useState(false);
    const [ value, setValue ] = useState("");
    console.log(value)

    const { setLikeMutation } = useLikeMutation();
    const [updateTodo] = useMutation(UPDATE_TODO, {
        refetchQueries: [
            TODOS,
        ]
    });

    const [deleteTodo] = useMutation(DELETE_TODO, {
        refetchQueries: [
            TODOS
        ]
    })

    useEffect(() => {
        console.log(todo.todo)
    }, [todo])



    return (
        <div>
            <Card_Master>
                <Link href={`/user/${todo.createdBy.id}`} >
                    <AvatarCircle src='/placeholder.png' alt="Cat" />
                </Link>
                <Card_Context>
                    <Card_Info_Top_Master>
                        <Card_Info_Top_Item>
                            { userID === todo.createdBy.id ? "You Posted At" : todo.createdBy.username }
                        </Card_Info_Top_Item>
                        <Card_Info_Top_Item>
                            { todo.createdAt }
                        </Card_Info_Top_Item>
                        { userID === todo.createdBy.id && 
                            <>
                                <Card_Info_Top_Item>
                                    <EditIcon onClick={() => setCanEdit(state => !state)} />
                                </Card_Info_Top_Item>
                                <Card_Info_Top_Item>
                                    <TrashIcon onClick={ async () => {
                                        try {
                                            await deleteTodo({
                                                variables: { "id": todo.id }
                                            })
                                        } catch(err) {
                                            console.log(err)
                                        }
                                    }} />
                                </Card_Info_Top_Item>
                            </>
                        }
                    </Card_Info_Top_Master>
                    { todo.subject } <br/>
                    { canEdit ? <Card_TextArea placeholder='Edit Here...' onChange={(e: React.ChangeEvent<HTMLInputElement> ) => setValue(e.target.value)} /> : todo.todo }
                    { canEdit && <>
                        <Card_Info_Top_Master>
                            <EditIcon onClick={ async () => {
                                try {
                                    await updateTodo({
                                        variables: { "id": todo.id, "option": "todo", "value": value }
                                    })
                                    setCanEdit(state => !state)
                                    console.log('yes!')
                                } catch(err) {
                                    console.log(err)
                                }

                            }} /> &nbsp; Submit Changes 
                        </Card_Info_Top_Master>
                    </> }
                </Card_Context>
            </Card_Master>
            <Card_Master>
            <Forum_Assest_Header>
                <Forum_Actions>
                    <Forum_Action_Items onClick={() => setLikeMutation({ id: todo.id, didLiked: todo.didUserLike })} >
                       { todo.likedBy.length } Likes { todo.didUserLike ? <LikedHeart/> : <UnlikedHeart/> }
                    </Forum_Action_Items>
                    <Link href={`/todo/${todo.id}`}>
                        <Forum_Action_Items>
                            { todo.comments.length } Comments <CommentBubble />
                        </Forum_Action_Items>
                    </Link>
                    <Forum_Action_Items>
                        Status <StatusDot/>
                    </Forum_Action_Items>
                </Forum_Actions>
            </Forum_Assest_Header>
        </Card_Master>
        </div>
    )

}
