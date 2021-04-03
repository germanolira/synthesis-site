import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FiAlignRight } from "react-icons/fi";

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElement'

const Navbar: React.FC = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo>
                        <Link href='/'>
                            <a>Synthesis</a>
                        </Link>
                    </NavLogo>
                    <MobileIcon>
                        <FiAlignRight />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks>
                                <Link href="/about">
                                    About
                                </Link>
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar