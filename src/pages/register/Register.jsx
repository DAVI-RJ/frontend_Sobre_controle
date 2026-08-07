import { useNavigate } from "react-router-dom";
// componentes
import Form from "@/shared/components/molecules/form/Form";
import RegisterLayout from "@/shared/components/templates/registerlayout/RegisterLayout";
import Step1 from "@/shared/components/molecules/stepsRegister/Step1";
import Step2 from "@/shared/components/molecules/stepsRegister/Step2";
import Step3 from "@/shared/components/molecules/stepsRegister/Step3";
import ButtonComponent from "@/shared/components/atoms/button/Button";
import ErrorMessage from "@/shared/components/atoms/errors/ErrorMessage";
import log from "@/core/logger/logger";
import { useMultiStep } from "@/core/hooks/useMultiStep";

// Api backend
import { createCompany } from "@/features/company/api/createCompany";
import { createAddress } from "@/features/address/api/addressApi";

import "./register-style.css";

export default function Register() {
  const navigate = useNavigate();
  const submitCompany = async (allData) => {
    try {
      const addressId = await createAddress(allData);
      if (addressId) {
        const companyPayload = {
          ...allData,
          address_id: addressId,
        };

        await createCompany(companyPayload);
        log.info("Empresa: ", allData, "Address: ", addressId);
        setTimeout(() => navigate("/"), 1000);
      }
    } catch (error) {
      log.info("error connection: ", error);
    }
  };

  const { step, prevStep, handleRegister } = useMultiStep(3, submitCompany);

  const currentStep = () => {
    switch (step) {
      case 1:
        return <Step1 formType="company" />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        return <Step1 />;
    }
  };

  return (
    <RegisterLayout>
      <div className="register-class">
        <h1>Cadastro</h1>
        <ErrorMessage />
        <Form onSubmit={handleRegister}>
          {currentStep()}
          <nav className="option-register">
            <ButtonComponent type="submit">
              {step === 3 ? "Finalizar Cadastro" : "Próximo"}
            </ButtonComponent>
            {step > 1 && (
              <ButtonComponent type="button" onClick={prevStep}>
                Voltar
              </ButtonComponent>
            )}
          </nav>
        </Form>
      </div>
    </RegisterLayout>
  );
}
