import React from 'react';
import { TopNav, TopNavUl } from './TopMenuStyles';
import MenuItem from './MenuItems/MenuItem'
import Logo from '../Logo/Logo'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const TopMenu = () => {
    return (
        <TopNav>
            <Logo textContent="kduMagalhães"/>
            <TopNavUl>
               <AnchorLink href="#projects"><MenuItem text="projects" href="/#" fontColor="var(--lighter-blue)"/></AnchorLink>
               <AnchorLink href="#contact"><MenuItem text="contact" href="/#" fontColor="var(--lighter-blue)"/></AnchorLink>
            </TopNavUl>
        </TopNav>
    )
}

export default TopMenu