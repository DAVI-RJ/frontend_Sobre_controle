import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import "./form.css";

export default function Form({ onSubmit, children, defaultValues = {}, schema }) {
  const methods = useForm({
    defaultValues,
    resolver: schema ? zodResolver(schema) : undefined,
    shouldUnregister: false,
    mode: "onChange",
  });
  // Formulario usa useFormContext
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="form-class" noValidate>
        {children}
      </form>
    </FormProvider>
  );
}
