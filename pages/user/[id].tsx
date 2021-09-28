

import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'
import { GET_TODO_BY_ID } from '../../client_modules/apollo_client/querys/todos'
import { ME } from '../../client_modules/apollo_client/querys/user'
import NavDropDown from '../../client_modules/components/DropDowns/NavDropDown/NavDropDown'
import TodoDropDown from '../../client_modules/components/DropDowns/TodoDropDown/TodoDropDown'
import Navbar from '../../client_modules/components/Navbar/Navbar'
import Settings from '../../client_modules/components/Settings/Settings'
import Todos from '../../client_modules/components/Todos/Todos'
import { AppLayout, AppLayOutItems } from '../../client_modules/styled_components/aligment'

export default function userPage() {

    const route = useRouter();
    const { id } = route.query

    const { data } = useQuery(GET_TODO_BY_ID, {
        variables: { "id": id }
    })

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
                { data && <Todos todo={data}/> }
                </AppLayOutItems>
            </AppLayout>
        </div>
    )
}
