
import React from 'react'

// next 
import Link from 'next/link'

// styles
import { CloseButton } from '../../../styled_components/button'
import { NavDropDownLink, NavDropDownMenu, NavDropDownWrapper } from './NavDropDownStyles'
import { BaseDropDown } from '../../../styled_components/dropdown'
import { useGlobalState } from '../../../hooks/useGlobalStateHook'
import { primary } from '../../../styled_components/palette'
import { useMutation } from '@apollo/client'
import { SIGN } from '../../../apollo_client/mutations/user'

export default function NavDropDown() {

    const { state, dispatch } = useGlobalState();
    const { menu, user } = state

    const [signOut] = useMutation(SIGN)

    const handleSignOut = async () => {
        if(user) await signOut({ variables: { "type": "sign_out" } })
    }


    return (
        <BaseDropDown isOpen={menu?.MENU_NAV} background={primary}>
            <CloseButton onClick={() => dispatch({ type: "MENU_NAV", payload: menu?.MENU_NAV })} />
            <NavDropDownWrapper>
                <NavDropDownMenu>
                    <Link href="/">
                        <NavDropDownLink onClick={() => dispatch({ type: "MENU_NAV", payload: menu?.MENU_NAV })} >
                            Home
                        </NavDropDownLink>
                    </Link>
                    {user && <>
                        <Link href="settings">
                            <NavDropDownLink onClick={() => dispatch({ type: "MENU_NAV", payload: menu?.MENU_NAV })} >
                                User Settings
                            </NavDropDownLink>
                        </Link>
                        <Link href="search">
                            <NavDropDownLink onClick={() => dispatch({ type: "MENU_NAV", payload: menu?.MENU_NAV })} >
                                Search For Users
                            </NavDropDownLink>
                        </Link>
                    </>}
                    <Link href={'/signin'}>
                        <NavDropDownLink onClick={handleSignOut} >
                            { user ? 'Sign Out' : 'Sign In' }
                        </NavDropDownLink>
                    </Link>
                </NavDropDownMenu>
            </NavDropDownWrapper>
        </BaseDropDown>
    )
}
