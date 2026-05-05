import { useState } from "react";

import { useCustomers } from "@/features/customers/hooks/useCustomer";

export function useMultiStep() {
  const [step, setStep] = useState(1);
  const [stepData, setFormData] = useState({});
  const { handleCustomer } = useCustomers();
  // STEPS FORMULARIOS
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Função de chamada para registrar Clientes
  const handleRegister = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    if (step < 2) {
      nextStep();
    } else {
      handleCustomer(data);
      // Verificação se todos os campos obrigatorio estão sendo passado
      console.log("meu objeto vem aqui", { ...stepData, ...data });
    }
  };
  return { step, prevStep, handleRegister };
}
