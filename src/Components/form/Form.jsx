import React from 'react';
import { useForm, FormProvider } from 'react-hook-form'

import './Form.css'

export default function Form({ onSubmit, children, defaultValues = {} }) {
  const methods = useForm({ defaultValues, shouldUnregister: false })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="formClass">
        {children}
      </form>
    </FormProvider>
  );
}
/*
import { useState } from 'react'


import Step1 from './stepsRegister/Step1'
import Step2 from './stepsRegister/Step2'
import Step3 from './stepsRegister/Step3'

export default function Form() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})
  const methods = useForm()

  const onSubmit = async (data) => { 
    const allData = {...formData, ...data}; 

    if(step < 3){
      setFormData(allData);
      setStep(step + 1); 
    }else {

      console.log(data)
       try {
        const response = await axios.post(allData);
        console.log("resposta do backend", response.data)
      } catch (error) {
        console.log("erro na validação", error)
      }
    
    }    
  };

  return (
    <div>
    <FormProvider {...methods}>
      <form  onSubmit={methods.handleSubmit(onSubmit)} className='formClass'>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}

      </form>
    </FormProvider>
    </div>
  )
}
*/