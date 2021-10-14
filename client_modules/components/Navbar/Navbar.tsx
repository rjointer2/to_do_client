
// next 
import Link from 'next/link'

// styles
import { NavContainer, NavWrapper } from './NavbarStyles'
import { LogoIcon, MenuIcon } from '../../styled_components/assets'

// react
import { useCallback } from 'react'
import { useGlobalState } from '../../hooks/useGlobalStateHook'
import { useAuthenticateUser } from '../../hooks/useAuthUser'


// apollo


export default function Navbar() {

    const { state, dispatch } = useGlobalState();
    const { menu, user } = state;

    const userStateData = useCallback(() => useAuthenticateUser(), [user]);
    userStateData()
    
    return (
        <NavContainer>
            <NavWrapper>
                <Link href="/">
                    <div>
                        <LogoIcon /> { user && `Welcome Back ${user.username}!` }
                    </div>
                </Link>
                <MenuIcon  onClick={() => dispatch({ type: 'MENU_NAV', payload: menu?.MENU_NAV })} />
            </NavWrapper>
        </NavContainer>
    )
}
