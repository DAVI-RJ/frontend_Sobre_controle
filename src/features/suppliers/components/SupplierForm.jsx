import { useNavigate } from "react-router-dom";

// componentes
import Form from "@/shared/components/molecules/form/Form";
import Step1 from "@/shared/components/molecules/stepsRegister/Step1";
import Step2 from "@/shared/components/molecules/stepsRegister/Step2";
import ButtonComponent from "@/shared/components/atoms/button/Button";
// hooks
import { useSupplier } from "../hooks/useSupplier";
import { useAddress } from "@/features/address/hooks/useAddress";
import { useMultiStep } from "@/core/hooks/useMultiStep";

import "./supplier-style.css";

export default function SupplierForm() {
  //primeiro crio o endereço, depois o fornecedor
  const { createAddressId } = useAddress();
  const { submitFormSupplier } = useSupplier();
  const navigate = useNavigate();

  const submitData = async (allData) => {
    await createAddressId(allData);

    const supplier = {
      ...allData,
    };
    await submitFormSupplier(supplier);
    setTimeout(() => navigate("/home"), 1000);
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
