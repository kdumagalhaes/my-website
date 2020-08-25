import React from 'react';
import { ButtonTag } from './ButtonStyles';

const Button = ({ textButton, maxWidth, margin, backgroundColor, textColor }) => {
  return <ButtonTag maxWidth={maxWidth} margin={margin} backgroundColor={backgroundColor} textColor={textColor}>{textButton}</ButtonTag>;
};

export default Button;
