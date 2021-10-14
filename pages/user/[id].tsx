
// apollo 
import { useQuery } from '@apollo/client'
import { ME  } from '../../client_modules/apollo_client/querys/user'

// next/link
import { useRouter } from 'next/router'

// react and hook
import React, { useEffect } from 'react'
import { useGlobalState } from '../../client_modules/hooks/useGlobalStateHook';

// components
import NavDropDown from '../../client_modules/components/DropDowns/NavDropDown/NavDropDown'
import TodoDropDown from '../../client_modules/components/DropDowns/TodoDropDown/TodoDropDown'
import Navbar from '../../client_modules/components/Navbar/Navbar'
import Settings from '../../client_modules/components/Settings/Settings'
import Todo from '../../client_modules/components/Todo/Todo'
import { AppLayout, AppLayOutItems } from '../../client_modules/styled_components/aligment'
import useUser from '../../client_modules/hooks/useUser'
import UserProfile from '../../client_modules/components/User/UserProfile'


export default function userPage() {

    const { state, dispatch } = useGlobalState();
    const { user } = state;

    const route = useRouter();
    const { id } = route.query

    const { data } = useUser(id)

    return (
        <>
            <title>User's Page</title>
            <link rel="manifest" href="/manifest.webmanifest" />
            <link rel="apple-touch-icon" href="/icon.png"></link>
            <link rel="icon" href="/icon.png"></link>
            <meta name="theme-color" content="#fff" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Sign in to get all the features of the todo page!"  />
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>

            <NavDropDown />
            <TodoDropDown />
            <Navbar />

            <AppLayout>
                <AppLayOutItems>
                <Settings/>
                </AppLayOutItems>
                <AppLayOutItems>
               {/*  { data && `${data.username}'s Todos`  } */}
                { data && <UserProfile user={data}/> }
                { data && user && data.todos.map(( todo, index ) => (
                    <React.Fragment key={index}>
                        <Todo todo={todo} userID={user.id} />
                    </React.Fragment>
                )) }
                </AppLayOutItems>
            </AppLayout>
        </>
    )
}
