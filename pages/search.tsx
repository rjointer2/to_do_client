

import { useMutation, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { SEARCH_USER } from '../client_modules/apollo_client/mutations/user'
import { ME } from '../client_modules/apollo_client/querys/user'
import NavDropDown from '../client_modules/components/DropDowns/NavDropDown/NavDropDown'
import TodoDropDown from '../client_modules/components/DropDowns/TodoDropDown/TodoDropDown'
import Navbar from '../client_modules/components/Navbar/Navbar'
import Settings from '../client_modules/components/Settings/Settings'
import UserProfile from '../client_modules/components/User/UserProfile'
import { dispatchUserState } from '../client_modules/hooks/useDispatchUserState'
import { useGlobalState } from '../client_modules/hooks/useGlobalStateHook'
import { useSearchHook } from '../client_modules/hooks/useSearchHook'
import { AppLayout, AppLayOutItems } from '../client_modules/styled_components/aligment'
import { FormInput, FormLabel } from '../client_modules/styled_components/form'

export default function search() {

    const { useSearch, searchResult } = useSearchHook()

    const { state, dispatch } = useGlobalState();
    const { menu, user } = state;

    const { data, loading, error } = useQuery(ME);
    useEffect(() => dispatchUserState({ data, dispatch }), [data]);
    
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
                    <br/>
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    <FormLabel>Search For Todos or Users</FormLabel>
                    <FormInput placeholder="Search..." name="search" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        useSearch(e)
                    }} />
                    </div>
                    { searchResult.map((result: any, index: number) => (
                        <React.Fragment key={index}>
                            <UserProfile user={result} />
                        </React.Fragment>
                    )) }
                </AppLayOutItems>
            </AppLayout>
        </div>
    )
}
