import React from 'react';
import InputComponent from "../../atoms/inputs/Input";
import { companyFields } from '../../../services/models/CompanyService';

const Step1 = () => {
  return (
    <div>
      <h2>Dados da Empresa</h2>
      {companyFields.map((field) => 
        <InputComponent 
          key={field.name}
          id={field.name}
          name={field.name}
          type={field.type}
          placeholder={`Digite o nome ${field.name}`}
          label={field.label}
          rules={{
            required: `${field.label.replace(':', " ")} é obrigatório`,
          }}
        />  
      )} 
    </div>
    );
  };

export default Step1;
