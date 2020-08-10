import React from 'react'
import { AboutMeDiv } from './AboutMeStyles'
import TopMenu from './TopMenu/TopMenu'
import Profile from './Profile/Profile'

const Header = () => {
    return (
        <AboutMeDiv>
            <TopMenu />
            <Profile/>
        </AboutMeDiv>
    )
}

export default Header