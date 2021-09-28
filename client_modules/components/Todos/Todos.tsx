
import React, { useEffect } from 'react'
import { Card_Context, Card_Info_Top_Item, Card_Info_Top_Master, Card_Master, Forum_Actions, Forum_Action_Items, Forum_Assest_Header } from '../../styled_components/aligment';
import { AvatarCircle, CommentBubble, LikedHeart, StatusDot, UnlikedHeart } from '../../styled_components/assets';
import Link from "next/link";
import useLikeMutation from '../../hooks/useLikeMutationHook';

export default function Todos({ todo } : { todo: any }) {

    const { setLikeMutation } = useLikeMutation();

    useEffect(() => {
        console.log(todo)
    }, [todo])


    return (
        <div>
            <Card_Master>
                <AvatarCircle src='/placeholder.png' alt="Cat" />
                <Card_Context>
                    <Card_Info_Top_Master>
                        <Card_Info_Top_Item>
                            { todo.createdBy.username }
                        </Card_Info_Top_Item>
                        <Card_Info_Top_Item>
                            { todo.createdAt }
                        </Card_Info_Top_Item>
                    </Card_Info_Top_Master>
                    { todo.subject }
                    { todo.todo }
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
