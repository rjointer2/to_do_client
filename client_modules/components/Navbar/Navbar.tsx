
import React from 'react'

// next 
import Link from 'next/link'

// styles
import { NavContainer, NavWrapper } from './NavbarStyles'
import { LogoIcon, MenuIcon } from '../../styled_components/assets'

export default function Navbar() {
    
    return (
        <NavContainer>
            <NavWrapper>
                <LogoIcon />
                <Link href="#">
                    <MenuIcon />
                </Link>
            </NavWrapper>
        </NavContainer>
    )
}
