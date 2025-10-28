import React from 'react';
import { useForm, FormProvider } from 'react-hook-form'

import './Form.css'

export default function Form({ onSubmit, children, defaultValues = {} }) {
  const methods = useForm({ 
    defaultValues, 
    shouldUnregister: false,
    mode: 'onChange' // validação em tempo real
  })

  return (
    <FormProvider {...methods}>
      <form 
        onSubmit={methods.handleSubmit(onSubmit)} className="form-class"
        noValidate // previne validação nativa do browser
      >
        {children}
      </form>
    </FormProvider>
  );
}