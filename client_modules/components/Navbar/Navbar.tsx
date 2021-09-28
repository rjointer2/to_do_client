
import React from 'react'

// next 
import Link from 'next/link'

// styles
import { NavContainer, NavWrapper } from './NavbarStyles'
import { LogoIcon, MenuIcon } from '../../styled_components/assets'
import { useGlobalState } from '../../hooks/useGlobalStateHook'

export default function Navbar() {

    const { state, dispatch } = useGlobalState();
    const { menu, user } = state;
    
    return (
        <NavContainer>
            <NavWrapper>
                <Link href="/">
                    <div>
                        <LogoIcon /> { user?.data && "Weclome, Back " + user?.data.username + "!" }
                    </div>
                </Link>
                <MenuIcon  onClick={() => dispatch({ type: 'MENU_NAV', payload: menu?.MENU_NAV })} />
            </NavWrapper>
        </NavContainer>
    )
}
