import React from 'react';
import { TopNav, TopNavUl } from './TopMenuStyles';
import Logo from '../Logo/Logo';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const TopMenu = () => {
  return (
    <TopNav>
      <Logo textContent="kduMagalhães" />
      <TopNavUl>
        <li>
          <AnchorLink href="#projects">
            projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">
            contact
          </AnchorLink>
        </li>
      </TopNavUl>
    </TopNav>
  );
};

export default TopMenu;
