import Form from "@/shared/components/molecules/form/Form";
import Step1 from "@/shared/components/molecules/stepsRegister/Step1";
import Step2 from "@/shared/components/molecules/stepsRegister/Step2";
import ButtonComponent from "@/shared/components/atoms/button/Button";
import ErrorMessage from "@/shared/components/atoms/errors/ErrorMessage";
import TransitionWrapper from "@/shared/components/atoms/transitionWrapper/TransitionWrapper";
import LoadingComponent from "@/shared/components/organisms/loading/LoadingComponent";

import { useMultiStep } from "@/core/hooks/useMultiStep";
import { useCustomer } from "../hooks/useCustomer";
import { useAddress } from "@/features/address/hooks/useAddress";

import log from "@/core/logger/logger";

import "./customer-style.css";

export default function CustomerForm({ onSuccess }) {
  const { createAddressId } = useAddress();
  const { loading, submitFormCustomer } = useCustomer();

  const submitData = async (allData) => {
    try {
      const addressId = await createAddressId(allData);

      const customer = {
        ...allData,
        customer: {
          ...allData.customer,
          addressId,
        },
      };

      log.info("customer: ", customer);

      await submitFormCustomer(customer);
      onSuccess();
    } catch (error) {
      log.info("erro ao cadastrar o cliente", error);
    }
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
    <section >
      <header className="customer-form-header">
        <h1>Cadastro de Clientes</h1>
      </header>

      <ErrorMessage />
      <div className="customer-form-body">
        <Form onSubmit={handleRegister}>
          <TransitionWrapper stateKey={step}>
            <div key={step} className="customer-form-fields">
              {currentStep()}
            </div>
          </TransitionWrapper>

          <nav className="customer-form-option">
            {step > 1 && (
              <ButtonComponent className=".cancel-button" onClick={prevStep}>
                Voltar
              </ButtonComponent>
            )}

            <ButtonComponent className="confirm-button" type="submit">
              {step === 2 ? "Finalizar Cadastro" : "Próximo"}
            </ButtonComponent>
          </nav>

          <div>
            <LoadingComponent isLoading={loading}></LoadingComponent>
          </div>
        </Form>
      </div>
    </section>
  );
}
