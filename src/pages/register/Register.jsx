import { useState } from 'react';

// componentes 
import Form from "../../components/molecules/form/Form";
import RegisterLayout from '../../components/templates/registerlayout/RegisterLayout';
import Step1 from "../../components/molecules/stepsRegister/Step1";
import Step2 from "../../components/molecules/stepsRegister/Step2";
import Step3 from "../../components/molecules/stepsRegister/Step3";
import ButtonComponent from "../../components/atoms/button/Button";

// Api backend
import {useCompanyServices} from '../../services/companyApi/CompanyServices';
import { useAddressServices } from '../../services/addressApi/AddressApi';

import './Register.css'

export default function Register() {
  const [step, setStep] = useState(1);
  const [stepData, setStepData] = useState();
  const { createCompany } = useCompanyServices();
  const { createAddress } = useAddressServices();
  
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  
  const handleRegister = async (data) => {
    
    if (step < 3) {
      setStepData(prev => ({stepData: data, ...prev}));
      nextStep();
    }else {
      try {
        const allData = { ...stepData, ...data};
        setStepData(allData);
        
        const addressData = {
          street: allData.street,
          number: allData.number,
          city: allData.city,
          neighborhood: allData.neighborhood,
          state: allData.state,
          zip: allData.zip
        }

        const addressId = await createAddress(addressData);

        console.log("addressId: ", addressId);

        if(addressId) {
         
          const dataCompany = {
            name: allData.name,
            email: allData.email,
            phone: allData.phone,
            cnpj: allData.cnpj,
            representative: allData.representative,
            password: allData.password, 
            passwordConfirm: allData.passwordConfirm,
            address_id: addressId,
          };

          await createCompany(dataCompany);
          console.log("criando empresa: ", dataCompany);
        }
          
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
            {step > 1 && <ButtonComponent type="button" onClick={prevStep}>Voltar</ButtonComponent>}
          </nav> 
        </Form>
      </div>
    </RegisterLayout>
  );
}