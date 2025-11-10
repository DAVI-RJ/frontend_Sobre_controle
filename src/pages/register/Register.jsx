import { useState } from 'react';
import Form from "../../components/molecules/form/Form";
import RegisterLayout from '../../components/templates/registerlayout/RegisterLayout';
import Step1 from "../../components/molecules/stepsRegister/Step1";
import Step2 from "../../components/molecules/stepsRegister/Step2";
import Step3 from "../../components/molecules/stepsRegister/Step3";
import ButtonComponent from "../../components/atoms/button/Button";
import connection from "../../services/api/ApiConnection"; 

import './Register.css'

export default function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  
  const handleRegister = async (data) => {
    setFormData(prev => ({...prev, ...data}));
      if (step < 3) {
        nextStep();
      } else {
        try {
          const response = await connection.post("/register")
          console.log("log:",{...formData, ...data, response});

        }catch(error){
          console.log("error conection: ", error)
        }
        
      }
    };

  const currentStep = () => {
    switch (step) {
      case 1: return <Step1 formType="company"/>;
      case 2: return <Step2 />;
      case 3: return <Step3 />;
      default: return <Step1 />;
    }
  };
  return (
    <RegisterLayout>
      <div className='register-class'>
        <h1>Cadastro</h1>
        <Form onSubmit={handleRegister}>
            {currentStep()}

          <nav className='option-register'>
            <ButtonComponent type="submit">
              {step === 3 ? 'Finalizar Cadastro' : 'Próximo'}
            </ButtonComponent>
            {step > 1 && <ButtonComponent onClick={prevStep}>Voltar</ButtonComponent>}
          </nav> 
        </Form>
      </div>
    </RegisterLayout>
  );
}