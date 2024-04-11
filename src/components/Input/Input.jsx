import React from 'react';
import { InputStyled } from './input.style';

const Input = (props) => {
  
  return (
    
    <InputStyled>
        <input type={props.type} placeholder={props.placeholder} />
    </InputStyled>
  );
};

export default Input;