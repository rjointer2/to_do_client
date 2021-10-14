
// apollo 
import { ApolloError, useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../../apollo_client/mutations/comment'

// next
import { useRouter } from 'next/router'

// react and hooks
import React, { useState } from 'react'
import getDates from '../../../hooks/useDate'
import { useGlobalState } from '../../../hooks/useGlobalStateHook'

// styles
import { Card_Context, Card_Info_Top_Item, Card_Info_Top_Master, Card_Master, Card_TextArea, Forum_Assest_Header, Forum_Heading, Forum_Items } from '../../../styled_components/aligment'
import { AvatarCircle } from '../../../styled_components/assets'
import { CloseButton, SubmitBtn } from '../../../styled_components/button'
import { BaseDropDown } from '../../../styled_components/dropdown'
import { primary } from '../../../styled_components/palette'
import UserAvatar from '../../UserAvatar/UserAvatar';

export default function CommentDropDown() {

    const { state, dispatch } = useGlobalState();
    const { menu, user } = state;

    const route = useRouter();
    const { id } = route.query;

    const [ comment, setComment ] = useState("")
    const [ addComment ] = useMutation(ADD_COMMENT);

    const handleSubmit = async () => {

        if(!user) return false

        try {
            await addComment({
                variables: { "createdBy": user.id, "comment": comment, "todoID": id }
            })
            console.log("great")
        } catch(err) {
            const error = err as unknown as ApolloError
            console.log(error.message)
        }
    }


    return (
        <>
            { user && <BaseDropDown isOpen={menu?.MENU_COMMENT} background={primary} >
                <Forum_Assest_Header>
                    <Forum_Items>
                        <Forum_Heading>
                            Write a comment!
                        </Forum_Heading>
                        <CloseButton  onClick={() => dispatch({ type: "MENU_COMMENT", payload: menu?.MENU_COMMENT })} />
                    </Forum_Items>
                </Forum_Assest_Header>
                <Card_Master>
                    <UserAvatar url={user.picture} />
                    <Card_Context>
                        <Card_Info_Top_Master>
                            <Card_Info_Top_Item>
                                { user.username } posting at
                            </Card_Info_Top_Item>
                            <Card_Info_Top_Item>
                                { getDates().getToday() }
                            </Card_Info_Top_Item>
                        </Card_Info_Top_Master>
                        <Card_TextArea placeholder="Write Comment Here..." onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value)} />
                    </Card_Context>
                </Card_Master>
                <SubmitBtn onClick={() => handleSubmit()} >
                    Submit
                </SubmitBtn>
            </BaseDropDown> }
        </>
    )
}
