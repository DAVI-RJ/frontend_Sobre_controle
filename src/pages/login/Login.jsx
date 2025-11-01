import React from 'react';
import { useNavigate } from 'react-router-dom'

import Form from "../../Components/molecules/form/Form";
import LoginLayout from "../../Components/templates/loginLayout /LoginLayout";
import ButtonComponent from '../../Components/atoms/button/Button';
import InputComponent from "../../Components/atoms/inputs/Input";

import "./Login.css"

export default function Login() {
  
  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log('Login:', data);
  };

  return (
    <LoginLayout className='login-class'>
      <h1> Login Sobre Controle</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, adipisci</p>
      <Form onSubmit={handleLogin}>
        <InputComponent
          name="email"
          type="email"
          label="Email:"
          placeholder="Digite seu email"
          rules={{
            required: { value: true, message: "O email é obrigatório" },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Digite um email válido"
            }
          }}
        />

        <InputComponent 
          name="password"
          type="password"
          label="Senha:"
          placeholder="Digite sua senha"
          rules={{
            required: { value: true, message: "A senha é obrigatória" },
            minLength: { value: 6, message: "A senha deve ter pelo menos 6 caracteres" }
          }}
        />
        
        <ButtonComponent type="submit" onClick={() => navigate('/Home')}>Entrar</ButtonComponent>
        <ButtonComponent type="button" onClick={() => navigate('/register')}>
          Não tenho cadastro
        </ButtonComponent>
      </Form>
      
    </LoginLayout>
  );
}

