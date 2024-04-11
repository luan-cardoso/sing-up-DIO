import React from 'react';
import { FormStyled, InputFormStyled, ButtonFormStyled } from './Form.style';

import Input from '../Input/Input';
import ButtonUsage from '../Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faMobileScreenButton} from '@fortawesome/free-solid-svg-icons';

const Form = () => {
  
    const h1Style = {
        fontFamily: 'Open Sans',
        color: '#FFFFFF', 
        fontSize: '32px', 
    };
    const pStyle = {
        fontFamily: 'Open Sans',
        color: '#FFFFFF', 
        fontSize: '16px', 
        marginTop: '15px',
        marginBottom: '45px',
    };

  return (
    <FormStyled>
        <h1 style={h1Style}>Comece agora grátis</h1>
        <p style={pStyle}>Crie sua conta e make the change._</p>
        
        <InputFormStyled>
            <FontAwesomeIcon 
                icon={faUser} 
                style={{
                    color: "#8647ad", 
                    marginRight: '12px', 
                    marginLeft: '10px',

                }} 
            />
            <Input
                type='text'
                placeholder='*Nome completo'
            />
        </InputFormStyled>
        <hr style={{ borderColor: "#8647ad", marginBottom: '20px' }}/>

        <InputFormStyled>
            <FontAwesomeIcon 
                icon={faEnvelope} 
                style={{
                    color: "#8647ad", 
                    marginRight: '12px', 
                    marginLeft: '10px',
                }} 
            />
            <Input
                type='email'
                placeholder='*Seu melhor @e-mail'
            />
        </InputFormStyled>
        <hr style={{ borderColor: "#8647ad", marginBottom: '20px' }}/>

        <InputFormStyled>
            <FontAwesomeIcon 
                icon={faMobileScreenButton} 
                style={{
                    color: "#8647ad", 
                    marginRight: '12px', 
                    marginLeft: '10px',
                }} 
            />
            <Input
                type='tel'
                placeholder='+55 (99) 99999-9999'
            />
        </InputFormStyled>
        <hr style={{ borderColor: "#8647ad", marginBottom: '20px' }}/>

        <InputFormStyled>
            <FontAwesomeIcon 
                icon={faLock} 
                style={{
                    color: "#8647ad", 
                    marginRight: '12px', 
                    marginLeft: '10px',
                }} 
            />
            <Input
                type='password'
                placeholder='*Senha'
            />
        </InputFormStyled>
        <hr style={{ borderColor: "#8647ad", marginBottom: '20px' }}/>
        
        <ButtonFormStyled>
            <ButtonUsage
                name='Criar minha conta grátis!'
            />
        </ButtonFormStyled>

        <p
            style={{ 
                color: "#FFF", 
                marginTop: '40px', 
                fontFamily: 'sans-serif',
                fontSize: '13px',
                textAlign: 'center' }}
        >
            Ao clicar em "criar minha conta grátis", declaro que aceito as <a href='https://www.dio.me/policies'>Políticas de Privacidade</a> e os <a href='https://www.dio.me/terms'>Termos de Uso</a> da DIO.
        </p>
        <p
            style={{ 
                color: "#FFF", 
                marginTop: '20px', 
                fontFamily: 'sans-serif',
                fontSize: '16px',
                textAlign: 'center' }}
        >
            Já tenho conta.

            <a 
            style={{ 
                color: "#22a239", 
            }}
            href='/'> Fazer login.
            </a>
        </p>
        
    </FormStyled>
  );
};

export default Form;


