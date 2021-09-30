

import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { ME  } from '../../client_modules/apollo_client/querys/user'
import NavDropDown from '../../client_modules/components/DropDowns/NavDropDown/NavDropDown'
import TodoDropDown from '../../client_modules/components/DropDowns/TodoDropDown/TodoDropDown'
import Navbar from '../../client_modules/components/Navbar/Navbar'
import Settings from '../../client_modules/components/Settings/Settings'
import Todo from '../../client_modules/components/Todo/Todo'
import { AppLayout, AppLayOutItems } from '../../client_modules/styled_components/aligment'
import { useGlobalState } from '../../client_modules/hooks/useGlobalStateHook';
import { dispatchUserState } from '../../client_modules/hooks/useDispatchUserState';
import useUser from '../../client_modules/hooks/useUser'
import UserProfile from '../../client_modules/components/User/UserProfile'


export default function userPage() {

    const { state, dispatch } = useGlobalState();
    const { user } = state;

    const { data: me, loading, error } = useQuery(ME);
    useEffect(() => dispatchUserState({ data: me, dispatch }), [me]);

    const route = useRouter();
    const { id } = route.query

    const { data } = useUser(id as string)

    console.log(data)
    

    //useEffect(() => dispatchUserState({ data, dispatch }), [data]);

    return (
        <div>
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
                { data && data.todos.map(( todo: any, index: number ) => (
                    <React.Fragment key={index}>
                        {console.log(todo.comments)}
                        <Todo todo={todo} userID={user?.data?.id} />
                        </React.Fragment>
                )) }
                </AppLayOutItems>
            </AppLayout>
        </div>
    )
}
