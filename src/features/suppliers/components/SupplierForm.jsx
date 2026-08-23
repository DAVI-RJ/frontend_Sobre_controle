// componentes
import Form from "@/shared/components/molecules/form/Form";
import Step1 from "@/shared/components/molecules/stepsRegister/Step1";
import Step2 from "@/shared/components/molecules/stepsRegister/Step2";
import ButtonComponent from "@/shared/components/atoms/button/Button";
// hooks
import { useMultiStep } from "@/core/hooks/useMultiStep";

import "./supplier-style.css";

export default function SupplierForm() {
  const { step, prevStep, handleRegister } = useMultiStep();

  // Verificar parte do furmulario e atualizar.
  const currentStep = () => {
    switch (step) {
      case 1:
        return <Step1 formType="supplier" />;
      case 2:
        return <Step2 />;
      default:
        return <Step1 />;
    }
  };

  return (
    <section className="register-section form-supplier">
      <h3>Cadastro de Fornecedores</h3>
      <Form onSubmit={handleRegister}>
        {currentStep()}

        <ButtonComponent type="submit">
          {step === 2 ? "Finalizar Cadastro" : "Próximo"}
        </ButtonComponent>
        {step > 1 && <ButtonComponent onClick={prevStep}>Voltar</ButtonComponent>}
      </Form>
    </section>
  );
}
