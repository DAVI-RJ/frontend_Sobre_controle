import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

// configuração de erro e autenticação
import { useAuth } from "../auth/Auth";
import { useAxiosErrorHandler } from "../../context/ErrorContext";

// componentes 
import Form from "../../Components/molecules/form/Form";
import LoginLayout from "../../Components/templates/loginLayout/LoginLayout";
import ButtonComponent from '../../Components/atoms/button/Button';
import InputComponent from "../../Components/atoms/inputs/Input";
import { ErrorMessage } from "../../context/error/ErrorMessage"
import LoadingComponent from "../../utils/LoadingComponent"; 

import "./Login.css"

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { errorMessage, setErrorMessage, handleError } = useAxiosErrorHandler(); 
  const [ loading, setLoading] = useState(false)

  async function handleLogin(data){
    setErrorMessage(null)
    try {
      await login(data)
      navigate("/home")
      setLoading(true); 

    }catch (err) {
      handleError(err)
    }
    finally {
      setTimeout(() => setLoading(false), 1000)
    }
  }

  return (
    <LoginLayout>
      <div className='login-class'>
        <h1>Sobre Controle</h1>
        <p>Mantenha no seu alcançe dados importantes da sua empresa</p>
        <Form onSubmit={handleLogin}>
          <LoadingComponent isLoading={loading} />
          <InputComponent
            name="email"
            type="email"
            label="Email:"
            placeholder="Digite seu email"
            rules={{
              required: { value: true, message: "This field is required" },
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
              required: { 
                value: true, 
                message: "This field is required"}
              }}
          />
          <nav className='option-login'>
            <ButtonComponent type="submit">
              Entrar
            </ButtonComponent>

            <ButtonComponent 
              type="button" 
              onClick={() => navigate('/register')}
              className="register-button">
                Não tenho cadastro
            </ButtonComponent>
          </nav>
          <ErrorMessage message={errorMessage} /> 
        </Form>
      </div>
    </LoginLayout>
  );
}