import InputComponent from "../../atoms/inputs/Input";


export default function ErrorPage(status) {
  return (
    <div className="error-page">
      <h1>Ops! Algo deu errado.</h1>
      <p>Status: {status}</p>
      <p>Estamos trabalhando para resolver o problema. Por favor, tente novamente.</p>
      <InputComponent type="button" />
    </div>
  );
}
