
// apollo

// next


// react
import React, {  } from 'react'
import { useSearchHook } from '../client_modules/hooks/useSearchHook'

// components
import NavDropDown from '../client_modules/components/DropDowns/NavDropDown/NavDropDown'
import TodoDropDown from '../client_modules/components/DropDowns/TodoDropDown/TodoDropDown'
import Navbar from '../client_modules/components/Navbar/Navbar'
import Settings from '../client_modules/components/Settings/Settings'
import UserProfile from '../client_modules/components/User/UserProfile'

// styles
import { AppLayout, AppLayOutItems } from '../client_modules/styled_components/aligment'
import { FormInput, FormLabel } from '../client_modules/styled_components/form'

export default function search() {

    const { useSearch, searchResult } = useSearchHook()
    
    return (
        <>
            <title>Todo Search</title>
            <link rel="manifest" href="/manifest.webmanifest" />
            <link rel="apple-touch-icon" href="/icon.png"></link>
            <link rel="icon" href="/icon.png"></link>
            <meta name="theme-color" content="#fff" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Find Users and their Todos!"  />

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
                        <FormLabel>Search For Users</FormLabel>
                        <FormInput placeholder="Search..." name="search" onChange={(e: React.ChangeEvent<HTMLInputElement>) => useSearch(e)} />
                    </div>
                    { searchResult.map((result, index) => (
                        <React.Fragment key={index}>
                            <UserProfile user={result} />
                        </React.Fragment>
                    )) }
                </AppLayOutItems>
            </AppLayout>
        </>
    )
}
