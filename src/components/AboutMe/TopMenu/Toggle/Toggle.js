import React, { useState } from 'react';
import { ToggleDiv } from './ToggleStyles';
import sun from '../../../../assets/sun.svg';
import moon from '../../../../assets/moon.svg';

const Toggle = () => {
  const [icon, setIcon] = useState(false)
  const currentIcon = icon ? sun : moon

  return (
    <ToggleDiv>
      <img onClick={() => setIcon(!icon)} src={currentIcon} alt="toggle color mode" />
    </ToggleDiv>
  );
};

export default Toggle;
