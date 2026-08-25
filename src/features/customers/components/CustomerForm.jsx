import { useNavigate } from "react-router-dom";

import Form from "@/shared/components/molecules/form/Form";
import Step1 from "@/shared/components/molecules/stepsRegister/Step1";
import Step2 from "@/shared/components/molecules/stepsRegister/Step2";
import ButtonComponent from "@/shared/components/atoms/button/Button";
import ErrorMessage from "@/shared/components/atoms/errors/ErrorMessage";

import { useMultiStep } from "@/core/hooks/useMultiStep";
import { useCustomer } from "../hooks/useCustomer";
import { useAddress } from "@/features/address/hooks/useAddress";

import "./customer-style.css";

export default function CustomerForm() {
  const { createAddressId } = useAddress();
  const { submitFormCustomer } = useCustomer();
  const navigate = useNavigate();

  const submitData = async (allData) => {
    await createAddressId(allData);

    const customer = {
      ...allData,
    };
    console.log("customer: ", customer);
    await submitFormCustomer(customer);
    setTimeout(() => navigate("/home"), 1000);
  };

  const { step, prevStep, handleRegister } = useMultiStep(2, submitData);

  // Verificar parte do furmulario e atualizar.
  const currentStep = () => {
    switch (step) {
      case 1:
        return <Step1 formType="customer" />;
      case 2:
        return <Step2 className="step-address" />;
      default:
        return <Step1 />;
    }
  };
  return (
    <section className="register-section">
      <h3>Cadastro de Clientes</h3>
      <ErrorMessage />
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
