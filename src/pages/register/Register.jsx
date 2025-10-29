'use client'

import React, { useState } from 'react';

import Form from "../../Components/molecules/form/Form";

import Step1 from "../../Components/molecules/stepsRegister/Step1";
import Step2 from "../../Components/molecules/stepsRegister/Step2";
import Step3 from "../../Components/molecules/stepsRegister/Step3";

import ButtonComponent from "../../Components/atoms/button/Button";

import './Register.css'

export default function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  
  const handleRegister = (data) => {
  setFormData(prev => ({...prev, ...data}));
    if (step < 3) {
      nextStep();
    } else {
      console.log("meu objeto vem aqui",{...formData, ...data});
    }
  };
  const currentStep = () => {
    switch (step) {
      case 1: return <Step1 />;
      case 2: return <Step2 />;
      case 3: return <Step3 />;
      default: return <Step1 />;
    }
  };
  return (
    <div className='register-class'>
      <h2>Cadastro</h2>
        <Form onSubmit={handleRegister}>
          {currentStep()}

        <ButtonComponent type="submit">
          {step === 3 ? 'Finalizar Cadastro' : 'Próximo'}
        </ButtonComponent>
        </Form>
        <nav className='navigationClass'>
          {step > 1 && <ButtonComponent onClick={prevStep}>Voltar</ButtonComponent>}
        </nav>
    </div>
  );
}