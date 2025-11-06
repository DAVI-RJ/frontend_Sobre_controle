import { useState } from 'react';
import Form from "../form/Form";
import Step1 from "../stepsRegister/Step1";
import Step2 from "../stepsRegister/Step2";
import ButtonComponent from "../../atoms/button/Button";

import './CustomerForm.css'

export default function CustomerComponent() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  
  const handleRegister = (data) => {
  setFormData(prev => ({...prev, ...data}));
    if (step < 2) {
      nextStep();
    } else {
      console.log("meu objeto vem aqui",{...formData, ...data});
    }
  };
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
        {step > 1 && <ButtonComponent onClick={prevStep}>Voltar</ButtonComponent>}
      </Form>
    </section>
  );
}