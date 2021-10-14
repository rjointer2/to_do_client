
// next
import { useRouter } from 'next/router'
import Link from "next/link"

// react
import React from 'react'
import useTodo from '../../client_modules/hooks/useTodo';
import { useGlobalState } from '../../client_modules/hooks/useGlobalStateHook'

// components
import ActionButton from '../../client_modules/components/ActionButton/ActionButton';
import CommentDropDown from '../../client_modules/components/DropDowns/CommentDropDown/CommentDropDown';
import NavDropDown from '../../client_modules/components/DropDowns/NavDropDown/NavDropDown';
import TodoDropDown from '../../client_modules/components/DropDowns/TodoDropDown/TodoDropDown';
import Navbar from '../../client_modules/components/Navbar/Navbar';
import Settings from '../../client_modules/components/Settings/Settings';
import Todo from '../../client_modules/components/Todo/Todo';
import { AppLayout, AppLayOutItems, Card_Context, Card_Info_Top_Item, Card_Info_Top_Master, Card_Master, Forum_Actions, Forum_Action_Items, Forum_Assest_Header } from '../../client_modules/styled_components/aligment';

// styles
import { AvatarCircle, TrashIcon } from '../../client_modules/styled_components/assets';
import { CenterText } from '../../client_modules/styled_components/text';

// apollo
import { ApolloError, useMutation } from '@apollo/client';
import { DELETE_COMMENT } from '../../client_modules/apollo_client/mutations/comment';
import UserAvatar from '../../client_modules/components/UserAvatar/UserAvatar';


export default function todoPage() {

    const { state } = useGlobalState();
    const { user } = state;

    const route = useRouter();
    const { id } = route.query;

    const todo = useTodo(id)

    const [deleteComment] = useMutation(DELETE_COMMENT);
    
    return (
        <>
            <head>
                <title>Todo Page</title>
                <link rel="manifest" href="/manifest.webmanifest" />
                <link rel="apple-touch-icon" href="/icon.png"></link>
                <link rel="icon" href="/icon.png"></link>
                <meta name="theme-color" content="#fff" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Sign in to get all the features of the todo page!"  />
            </head>

            <NavDropDown />
            <TodoDropDown />
            { user && <CommentDropDown /> }
            <Navbar />

            { user && <AppLayout>
                <AppLayOutItems>
                <Settings/>
                </AppLayOutItems>
                <AppLayOutItems>
                { todo && <Todo todo={todo} userID={user.id} /> }
                <CenterText>Comments</CenterText><br/>
                { todo && todo.comments.map(( comment, index ) => (
                    <React.Fragment key={index}>
                        <Card_Master>
                        <UserAvatar url={comment.createdBy.picture} />
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
                        { user && user.id === comment.createdBy.id && <Card_Master>
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
            </AppLayout> }
        </>
    )
}

