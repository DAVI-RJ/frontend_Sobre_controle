'use client'

import React, { useState } from 'react';

import Form from '../../Components/form/Form';

import Step1 from '../../Components/form/stepsRegister/Step1';
import Step2 from '../../Components/form/stepsRegister/Step2';
import Step3 from '../../Components/form/stepsRegister/Step3';

import ButtonComponent from '../../Components/form/formComponentes/Button';

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
    <div className='pagesRegisterClass'>
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

/*import React, {useState} from 'react';

import Form from '../Components/form/Form';

import Step1 from '../Components/form/stepsRegister/Step1';
import Step2 from '../Components/form/stepsRegister/Step2'
import Step3 from '../Components/form/stepsRegister/Step3'


export default function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({})

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1)

  const onSubmit = async (data) => { 
  const allData = {...formData, ...data}; 

    if(step < 3){
      setFormData(allData);
    }else {
      console.log(data)
    }    
  };

  return (
    <div className='pagesClass'>
      <h2>Cadastro</h2>
      <Form onSubmit={onSubmit()}>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
      </Form>
      <div >
        {step > 1 && <button onClick={prevStep}>Voltar</button>}

      <button onClick={nextStep}>
        {step === 3 ? 'Finalizar Cadastro' : 'Próximo'}
      </button>
      </div>

    </div>
  )
}

*/