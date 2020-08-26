import React from 'react';
import { AboutMeDiv } from './AboutMeStyles';
import TopMenu from './TopMenu/TopMenu';
import Profile from './Profile/Profile';

const Header = ({ toggleTheme, setTheme }) => {
  return (
    <AboutMeDiv>
      <TopMenu toggleTheme={toggleTheme} setTheme={setTheme}/>
      <Profile />
    </AboutMeDiv>
  );
};

export default Header;
