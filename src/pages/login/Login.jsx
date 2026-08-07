import { useNavigate } from "react-router-dom";

// configuração de erro e autenticação
import { useAuth } from "@/core/hooks/useAuth";

// componentes
import Form from "@/shared/components/molecules/form/Form";
import LoginLayout from "@/shared/components/templates/loginLayout/LoginLayout";
import ButtonComponent from "@/shared/components/atoms/button/Button";
import InputComponent from "@/shared/components/atoms/inputs/Input";
import ErrorMessage from "@/shared/components/atoms/errors/ErrorMessage";
import LoadingComponent from "@/shared/components/organisms/loading/LoadingComponent";

import "./login-style.css";

export default function Login() {
  const navigate = useNavigate();
  const { login, loading } = useAuth();

  async function onSuccessLogin(data) {
    await login(data);
    setTimeout(() => {
      navigate("/home");
    }, 500);
  }

  return (
    <LoginLayout>
      <div className="login-info">
        <h1>Sobre Controle</h1>
        <h3>
          Conecte sua empresa a um ecosistema de <span>oportunidades</span>
        </h3>
        <p>
          Uma plataforma completa que integra fornecedores, clientes e produtos em uma rede
          eficiente e inteligente
        </p>
      </div>
      <div className="login-class">
        <h2>Bem-vindo</h2>
        <p>Acesse sua conta para continuar</p>

        <LoadingComponent isLoading={loading} />

        <Form onSubmit={onSuccessLogin}>
          <InputComponent
            className="input-login"
            name="email"
            type="email"
            label="Email:"
            placeholder="Digite seu email"
            rules={{
              required: { value: true, message: "This field is required" },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Digite um email válido",
              },
            }}
          />

          <InputComponent
            className="input-login"
            name="password"
            type="password"
            label="Senha:"
            placeholder="Digite sua senha"
            rules={{
              required: {
                value: true,
                message: "This field is required",
              },
            }}
          />
          <nav className="option-login">
            <ButtonComponent className="button-login" type="submit">
              Entrar
            </ButtonComponent>

            <ButtonComponent
              className="register-button"
              type="button"
              onClick={() => navigate("/register")}
            >
              Não tenho cadastro
            </ButtonComponent>
          </nav>
          <ErrorMessage />
        </Form>
      </div>
    </LoginLayout>
  );
}
