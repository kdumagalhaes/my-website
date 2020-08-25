import React from 'react';
import { TopNav, TopNavUl } from './TopMenuStyles';
import Logo from '../Logo/Logo';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Toggle from './Toggle/Toggle'

const TopMenu = () => {
  return (
    <TopNav>
      <Logo textContent="kduMagalhães" />
      <TopNavUl>
        <li>
          <AnchorLink offset="-270" href="#projects">
            projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink offset="-100" href="#contact">
            contact
          </AnchorLink>
        </li>
        <li>
          <Toggle/>
        </li>
      </TopNavUl>
    </TopNav>
  );
};

export default TopMenu;
