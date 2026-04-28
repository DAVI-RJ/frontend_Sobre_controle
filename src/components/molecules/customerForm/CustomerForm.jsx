import Form from "../form/Form";
import Step1 from "../stepsRegister/Step1";
import Step2 from "../stepsRegister/Step2";
import ButtonComponent from "../../atoms/button/Button";

import { useMultiStep } from '@/hooks/useMultiStep';

import './customer-form.css'

export default function CustomerComponent() {
  const { step, prevStep, handleRegister} = useMultiStep(); 
  
  // Verificar parte do furmulario e atualizar.
  const currentStep = () => {
    switch (step) {
      case 1: return <Step1 formType="customer" />;
      case 2: return <Step2 className="step-address"/>;
      default: return <Step1 />;
    }
  };
  return (
    <section className='custumer-class'>
      <h3>Cadastro de Clientes</h3>
      <Form onSubmit={handleRegister}>
        {currentStep()}

        <ButtonComponent type="submit">
          {step === 2 ? 'Finalizar Cadastro' : 'Próximo'}
        </ButtonComponent>
        {step > 1 && 
          <ButtonComponent onClick={prevStep}>
            Voltar
          </ButtonComponent>}
      </Form>
    </section>
  );
}