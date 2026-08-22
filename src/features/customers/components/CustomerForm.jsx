import { useNavigate } from "react-router-dom";

import Form from "@/shared/components/molecules/form/Form";
import Step1 from "@/shared/components/molecules/stepsRegister/Step1";
import Step2 from "@/shared/components/molecules/stepsRegister/Step2";
import ButtonComponent from "@/shared/components/atoms/button/Button";
import ErrorMessage from "@/shared/components/atoms/errors/ErrorMessage";

import { useMultiStep } from "@/core/hooks/useMultiStep";
import { useCustomers } from "../hooks/useCustomer";

import { createAddress } from "@/features/address/api/addressApi";

import "./customer-form.css";

export default function CustomerForm() {
  const { submitRegisterCustomer } = useCustomers();
  const navigate = useNavigate();

  const submitCustomer = async (allData) => {
    const addressId = await createAddress(allData);
    console.log("endereço: ", addressId);
    if (addressId) {
      const customer = {
        ...allData,
        address_id: addressId,
      };
      console.log("customer: ", customer);
      await submitRegisterCustomer(customer);
      setTimeout(() => navigate("/home"), 1000);
    }
  };

  const { step, prevStep, handleRegister } = useMultiStep(2, submitCustomer);

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
