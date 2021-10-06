
import React, { useEffect } from 'react'

// next 
import Link from 'next/link'

// styles
import { NavContainer, NavWrapper } from './NavbarStyles'
import { LogoIcon, MenuIcon } from '../../styled_components/assets'
import { useGlobalState } from '../../hooks/useGlobalStateHook'
import { dispatchUserState } from '../../hooks/useDispatchUserState'
import { useQuery } from '@apollo/client'
import { ME } from '../../apollo_client/querys/user'

export default function Navbar() {

    const { state, dispatch } = useGlobalState();
    const { menu, user } = state;

    const { data, } = useQuery(ME);
    useEffect(() => dispatchUserState({ data, dispatch }), [data]);
    
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
