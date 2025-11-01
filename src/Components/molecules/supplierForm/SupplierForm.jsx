import React, { useState } from "react";

import Form from "../form/Form";
import Step1 from "../stepsRegister/Step1";
import Step2 from "../stepsRegister/Step2";
import ButtonComponent from "../../atoms/button/Button"

import "./SupplierForm.css"

export default function SupplierComponent() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep (prev => prev + 1); 
  const prevStep = () => setStep (prev => prev - 1); 

  const handleRegister = (data) => {
    setFormData(prev => ({...prev, ...data}));
    if(step > 2){
      nextStep; 
    }else{
      console.log("dados do fornecedor", ...formData,...data)
    }
  }
  
  const currentStep = () => {
    switch (step) {
      case 1: return <Step1 formType="supplier"/>
      case 2: return <Step2 />
      default: return <Step1 />
    }
  }

  return (
    <section className="form-supplier">
      <h3>Cadastro de Fornecedores</h3>
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