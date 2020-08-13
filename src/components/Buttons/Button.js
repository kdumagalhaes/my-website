import React from 'react';
import { ButtonTag } from './ButtonStyles';

const Button = ({ textButton, maxWidth, margin }) => {
  return <ButtonTag maxWidth={maxWidth} margin={margin}>{textButton}</ButtonTag>;
};

export default Button;
