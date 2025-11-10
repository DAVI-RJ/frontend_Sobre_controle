import { useForm, FormProvider } from 'react-hook-form'

import './Form.css'

export default function Form({ onSubmit, children, defaultValues = {} }) {
  const methods = useForm({ 
    defaultValues, 
    shouldUnregister: false,
    mode: 'onChange' 
  })
// Formulario usa useFormContext
  return (
    <FormProvider {...methods}>
      <form 
        onSubmit={methods.handleSubmit(onSubmit)} className="form-class"
        noValidate 
      >
        {children}
      </form>
    </FormProvider>
  );
}