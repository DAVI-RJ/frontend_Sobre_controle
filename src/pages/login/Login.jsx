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
      <div className="login-class">
        <h1>Sobre Controle</h1>
        <p>Mantenha no seu alcançe dados importantes da sua empresa</p>

        <LoadingComponent isLoading={loading} />

        <Form onSubmit={onSuccessLogin}>
          <InputComponent
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
            <ButtonComponent type="submit">Entrar</ButtonComponent>

            <ButtonComponent
              type="button"
              onClick={() => navigate("/register")}
              className="register-button"
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
