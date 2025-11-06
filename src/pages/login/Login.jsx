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
    //try {
   //   const response = await connection.post("/login", data);
      
     // console.log('Login:', response.data);
      
      navigate("/Home")
   // }catch(error){
    //  console.log("erro na conexão",error)
   //
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
            <ButtonComponent type="submit" onClick={handleLogin}>Entrar</ButtonComponent>
            <ButtonComponent 
              type="button" 
              onClick={() => navigate('/register')}
              className="register-button">
              Não tenho cadastro
            </ButtonComponent>
          </nav>
          
        </Form>
      </div>
    </LoginLayout>
  );
}

