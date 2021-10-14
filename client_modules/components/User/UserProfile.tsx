

import React from 'react'
import { Card_Context, Card_Info_Top_Item, Card_Info_Top_Master, Card_Master, Forum_Actions, Forum_Action_Items, Forum_Assest_Header } from '../../styled_components/aligment'

import { User } from '../../types'
import UserAvatar from '../UserAvatar/UserAvatar'

export default function UserProfile({ user } : { user: User }) {
    return (
        <div>
            <br/>
            <Card_Master>
                <UserAvatar url={user.picture} />
                <Card_Context>
                    <Card_Info_Top_Master>
                        <Card_Info_Top_Item>
                            Username: {user.username}
                        </Card_Info_Top_Item>
                        <Card_Info_Top_Item>
                            Email: {user.email}
                        </Card_Info_Top_Item>
                    </Card_Info_Top_Master>
                </Card_Context>
            </Card_Master>
            <Card_Master>
            <Forum_Assest_Header>
                <Forum_Actions>
                    <Forum_Action_Items>
                      {user.todos.length} Todos
                    </Forum_Action_Items>
                </Forum_Actions>
            </Forum_Assest_Header>
        </Card_Master>
        </div>
    )
}
