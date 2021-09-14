
import React from 'react'
import { useGlobalState } from '../../../hooks/useGlobalStateHook'

// styles
import { AvatarCircle } from '../../../styled_components/assets';
import { primary } from '../../../styled_components/palette';

// components
import { BaseDropDown } from '../../../styled_components/dropdown'
import { Card_Context, Card_Info_Top_Item, Card_Info_Top_Master, Card_Master, Card_TextArea, Forum_Assest_Header, Forum_Heading, Forum_Items } from '../../../styled_components/aligment';
import { CloseButton } from '../../../styled_components/button';


export default function TodoDropDown() {

    const { state, dispatch } = useGlobalState();
    const { menu } = state;
 
    return (
        <BaseDropDown isOpen={menu?.MENU_TODO} background={primary} >
            <Forum_Assest_Header>
                <Forum_Items>
                    <Forum_Heading>
                        Post Todo!
                    </Forum_Heading>
                    <CloseButton/>
                </Forum_Items>
            </Forum_Assest_Header>
            <Card_Master>
                <AvatarCircle src='/placeholder.png' alt="Cat" />
                <Card_Context>
                    <Card_Info_Top_Master>
                        <Card_Info_Top_Item>
                            Username
                        </Card_Info_Top_Item>
                        <Card_Info_Top_Item>
                            Date
                        </Card_Info_Top_Item>
                    </Card_Info_Top_Master>
                    <Card_TextArea placeholder="Title" height={"20px"} />
                    <Card_TextArea placeholder="Write Something Great Here..." height={"150px"} />
                </Card_Context>
            </Card_Master>
        </BaseDropDown>
    )
}
