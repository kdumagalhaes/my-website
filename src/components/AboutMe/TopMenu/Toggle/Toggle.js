import React, { useState, useEffect } from 'react';
import { ToggleDiv } from './ToggleStyles';
import sun from '../../../../assets/sun.svg';
import moon from '../../../../assets/moon.svg';

const Toggle = ({ toggleTheme, setTheme }) => {
  const [icon, setIcon] = useState(false);
  const currentIcon = icon ? sun : moon;

  useEffect(() => {
    const localIcon = window.localStorage.getItem(currentIcon);
    localIcon && setIcon(localIcon);
  }, [currentIcon]);

  return (
    <ToggleDiv>
      <img
        onClick={() => {
          setIcon(!icon);
          setTheme(toggleTheme);
        }}
        src={currentIcon}
        alt="toggle color mode"
      />
    </ToggleDiv>
  );
};

export default Toggle;
