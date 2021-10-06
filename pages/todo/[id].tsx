
import { useRouter } from 'next/router'
import React from 'react'
import ActionButton from '../../client_modules/components/ActionButton/ActionButton';
import CommentDropDown from '../../client_modules/components/DropDowns/CommentDropDown/CommentDropDown';
import NavDropDown from '../../client_modules/components/DropDowns/NavDropDown/NavDropDown';
import TodoDropDown from '../../client_modules/components/DropDowns/TodoDropDown/TodoDropDown';
import Navbar from '../../client_modules/components/Navbar/Navbar';
import Settings from '../../client_modules/components/Settings/Settings';
import Todo from '../../client_modules/components/Todo/Todo';
import useTodos from '../../client_modules/hooks/useTodos';
import { AppLayout, AppLayOutItems, Card_Context, Card_Info_Top_Item, Card_Info_Top_Master, Card_Master, Forum_Actions, Forum_Action_Items, Forum_Assest_Header } from '../../client_modules/styled_components/aligment';
import { AvatarCircle, TrashIcon } from '../../client_modules/styled_components/assets';
import { CenterText } from '../../client_modules/styled_components/text';
import Link from "next/link"
import { useGlobalState } from '../../client_modules/hooks/useGlobalStateHook';
import { ApolloError, useMutation } from '@apollo/client';
import { DELETE_COMMENT } from '../../client_modules/apollo_client/mutations/comment';

export default function todoPage() {

    const { state } = useGlobalState();
    const { user } = state;

    const route = useRouter();
    const { id } = route.query;

    const { todos } = useTodos(id as string)
    console.log(todos);

    const [deleteComment] = useMutation(DELETE_COMMENT);
    
    return (
        <div>
            <NavDropDown />
            <TodoDropDown />
            <CommentDropDown />
            <Navbar />

            <AppLayout>
                <AppLayOutItems>
                <Settings/>
                </AppLayOutItems>
                <AppLayOutItems>
                { todos && <Todo todo={todos} userID="" /> }
                <CenterText>Comments</CenterText><br/>
                { todos && todos.comments.map(( comment: any, index: number ) => (
                    <React.Fragment key={index}>
                        <Card_Master>
                            <Link href={`/user/${comment.createdBy.id}`} >
                                <AvatarCircle src='/placeholder.png' alt="Cat" />
                            </Link>
                            <Card_Context>
                                <Card_Info_Top_Master>
                                <Card_Info_Top_Item>
                                    { comment.createdBy.username } wrote at
                                </Card_Info_Top_Item>
                                <Card_Info_Top_Item>
                                    { comment.createdAt }
                                </Card_Info_Top_Item>
                                </Card_Info_Top_Master>
                                    { comment.comment }
                            </Card_Context>
                        </Card_Master>
                        { user?.data && user.data.id === comment.createdBy.id && <Card_Master>
                            <Forum_Assest_Header>
                                <Forum_Actions>
                                    <Forum_Action_Items>
                                    <TrashIcon onClick={async () => {
                                        try {  
                                            await deleteComment({
                                                variables: { "id": comment.id  }
                                            })
                                        } catch(err) {
                                            const error = err as unknown as ApolloError
                                            console.log(error.message)
                                        }
                                    }} /> Delete Comment?
                                    </Forum_Action_Items>
                                </Forum_Actions>
                            </Forum_Assest_Header>
                        </Card_Master> }
                    </React.Fragment> 
                )) }
                </AppLayOutItems>
                <ActionButton />
            </AppLayout>
        </div>
    )
}


// <TrashIcon/> Delete Comment?