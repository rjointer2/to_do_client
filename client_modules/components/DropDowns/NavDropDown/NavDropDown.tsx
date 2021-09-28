
import React from 'react'

// next 
import Link from 'next/link'

// styles
import { CloseButton } from '../../../styled_components/button'
import { NavDropDownLink, NavDropDownMenu, NavDropDownWrapper } from './NavDropDownStyles'
import { BaseDropDown } from '../../../styled_components/dropdown'
import { useGlobalState } from '../../../hooks/useGlobalStateHook'
import { primary } from '../../../styled_components/palette'

export default function NavDropDown() {

    const { state, dispatch } = useGlobalState();
    const { menu, user } = state


    return (
        <BaseDropDown isOpen={menu?.MENU_NAV} background={primary}>
            <CloseButton onClick={() => dispatch({ type: "MENU_NAV", payload: menu?.MENU_NAV })} />
            <NavDropDownWrapper>
                <NavDropDownMenu>
                    <Link href="/">
                        <NavDropDownLink>
                            Home
                        </NavDropDownLink>
                    </Link>
                    {user?.data && <>
                        <Link href="#">
                            <NavDropDownLink>
                                Home
                            </NavDropDownLink>
                        </Link>
                        <Link href="#">
                            <NavDropDownLink>
                                Home
                            </NavDropDownLink>
                        </Link>
                        <Link href="#">
                            <NavDropDownLink>
                                Home
                            </NavDropDownLink>
                        </Link>
                    </>}
                    <Link href={'/signin'}>
                        <NavDropDownLink>
                            { user?.data ? 'Sign Out' : 'Sign In' }
                        </NavDropDownLink>
                    </Link>
                </NavDropDownMenu>
            </NavDropDownWrapper>
        </BaseDropDown>
    )
}
