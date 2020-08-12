import React from 'react';
import { ButtonTag } from './ButtonStyles';

const Button = ({ textButton, maxWidth }) => {
  return <ButtonTag maxWidth={maxWidth}>{textButton}</ButtonTag>;
};

export default Button;
