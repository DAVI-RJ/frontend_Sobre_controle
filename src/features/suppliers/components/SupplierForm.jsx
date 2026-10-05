// components
import Form from "@/shared/components/molecules/form/Form";
import Step1 from "@/shared/components/molecules/stepsRegister/Step1";
import Step2 from "@/shared/components/molecules/stepsRegister/Step2";
import ButtonComponent from "@/shared/components/atoms/button/Button";
import ErrorMessage from "@/shared/components/atoms/errors/ErrorMessage";
import TransitionWrapper from "@/shared/components/atoms/transitionWrapper/TransitionWrapper";
import LoadingComponent from "@/shared/components/organisms/loading/LoadingComponent";

// hooks
import { useSupplier } from "../hooks/useSupplier";
import { useMultiStep } from "@/core/hooks/useMultiStep";
import { useAddress } from "@/features/address/hooks/useAddress";

// schemas
import { supplierSchema } from "@/domain/schemas/supplierSchema";
import { addressSchema } from "@/domain/schemas/addressSchema";

// Debug
import log from "@/core/logger/logger";

// Style
import "./supplier-style.css";

export default function SupplierForm({ onSuccess }) {
  //primeiro crio o endereço, depois o fornecedor
  const { createAddressId } = useAddress();
  const { isLoading, saveSupplier } = useSupplier();

  const submitData = async (allData) => {
    try {
      const addressId = await createAddressId(allData);

      const supplier = {
        ...allData,
        address_id: addressId,
      };

      await saveSupplier(supplier);
      onSuccess();
    } catch (error) {
      log.info("Erro ao cadastrar o fornecedor", error);
    }
  };
  const { step, prevStep, handleRegister } = useMultiStep(2, submitData);

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
    <section className="supplier-form">
      <header>
        <h3>Cadastro de Fornecedor</h3>
      </header>

      <ErrorMessage />

      <div className="supplier-form-body">
        <Form onSubmit={handleRegister} schema={step == 1 ? supplierSchema : addressSchema}>
          <TransitionWrapper stateKey={step}>
            <div key={step} className="supplier-form-filds">
              {currentStep()}
            </div>
          </TransitionWrapper>

          <nav className="supplier-form-option">
            {step > 1 && <ButtonComponent onClick={prevStep}>Voltar</ButtonComponent>}

            <ButtonComponent type="submit">
              {step === 2 ? "Finalizar Cadastro" : "Próximo"}
            </ButtonComponent>
          </nav>

          <div>
            <LoadingComponent isLoading={isLoading}></LoadingComponent>
          </div>
        </Form>
      </div>
    </section>
  );
}
