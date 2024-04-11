import React from 'react';
import { HeaderStyled, ItensStyled } from './Header.style';

import dioLogo from '../../assets/dio-logo.png';
import ButtonUsage from '../Button/Button'
import Carrers from '../Careers/Careers'


const Header = () => {
  
  return (
    <HeaderStyled>
        <img 
          src={dioLogo} 
          alt="dio logo" 
          style={{ 
            marginLeft: '100px', 
            height: '80px'}}
        />

        <ItensStyled>
          <Carrers/>
          <a href='/'>Bootcamps</a>
          <a href='/'>Projetos</a>
          <a href='/'>Comunidade</a>
          <a href='/'>Planos</a>
          <a href='/'>Para Empresas</a>

          <li>
            <ButtonUsage
              name='Entrar'
              
            />
          </li>
          <li>
            <ButtonUsage
              name='Criar conta'
            />
          </li>
          
        </ItensStyled>

    </HeaderStyled>
  );
};

export default Header;




