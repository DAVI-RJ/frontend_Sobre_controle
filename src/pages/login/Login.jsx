import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import Form from "../../Components/molecules/form/Form";
import LoginLayout from "../../Components/templates/loginLayout /LoginLayout";
import ButtonComponent from '../../Components/atoms/button/Button';
import InputComponent from "../../Components/atoms/inputs/Input";

import connection from '../../services/api/ApiConnection';

import "./Login.css"

export default function Login() {
  
  const navigate = useNavigate();

  const handleLogin =  async (data) => {
    /*const {email, password} = data; 
    try {
      const response = await connection.post("/login", {
        email, 
        password
      });
      console.log('Login:', response.data);
      navigate("/Home")
    }catch(error){
      console.log(error)
    }*/
    navigate("/Home")
  }
    
  return (
    <LoginLayout>
      <div className='login-class'>
        <h1>Sobre Controle</h1>
        <p>Mantenha no seu alcançe dados importantes da sua empresa</p>
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
          <nav className='option-login'>
            <ButtonComponent type="submit" onClick={() => handleLogin()}>Entrar</ButtonComponent>
            <ButtonComponent type="button" onClick={() => navigate('/register')}>
              Não tenho cadastro
            </ButtonComponent>
          </nav>
          
        </Form>
      </div>
    </LoginLayout>
  );
}

