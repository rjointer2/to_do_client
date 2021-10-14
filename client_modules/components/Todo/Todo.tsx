
// styles
import { Card_Context, Card_Info_Top_Item, Card_Info_Top_Master, Card_Master, Forum_Actions, Forum_Action_Items, Forum_Assest_Header } from '../../styled_components/aligment';
import { AvatarCircle, CommentBubble, LikedHeart, UnlikedHeart } from '../../styled_components/assets';

// next
import Link from "next/link";

// react
import { useState } from 'react'
import useLikeMutation from '../../hooks/useLikeMutationHook';

// types
import { Todo } from '../../types';
import UpdateTodoIcons from './UpdateTodoIcon';
import DeleteTodoIcon from './DeleteTodoIcon';
import UserAvatar from '../UserAvatar/UserAvatar';

export default function Todos({ todo, userID } : { todo: Todo, userID: string }) {

    const [ canEdit, setCanEdit ] = useState(false);
    const { setLikeMutation } = useLikeMutation();

    console.log(todo.likedBy)

    return (
        <div>
            <Card_Master>
                <UserAvatar url={todo.createdBy.picture} />
                <Card_Context>
                    <Card_Info_Top_Master>
                        <Card_Info_Top_Item>
                            { userID === todo.createdBy.id ? "You Posted At" : todo.createdBy.username }
                        </Card_Info_Top_Item>
                        <Card_Info_Top_Item>
                            { todo.createdAt }
                        </Card_Info_Top_Item>
                        { userID === todo.createdBy.id && <DeleteTodoIcon setState={setCanEdit} todoId={todo.id} /> }
                    </Card_Info_Top_Master>
                    { todo.subject } <br/>
                    <UpdateTodoIcons todoBody={todo.todo} todoId={todo.id} setState={setCanEdit} state={canEdit} />
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
                    </Forum_Actions>
                </Forum_Assest_Header>
            </Card_Master>
        </div>
    )

}
