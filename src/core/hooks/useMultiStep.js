// useMultiStep.js
import { useState } from "react";

export function useMultiStep(totalSteps, onSubmit) {
  const [step, setStep] = useState(1);
  const [stepData, setStepData] = useState({});

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleRegister = async (data) => {
    setStepData((prev) => ({ ...prev, ...data }));
    if (step < totalSteps) {
      nextStep();
    } else {
      await onSubmit({ ...stepData, ...data });
    }
  };

  return { step, prevStep, handleRegister };
}
