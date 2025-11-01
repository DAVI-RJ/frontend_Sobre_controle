import React from 'react';
import InputComponent from "../../atoms/inputs/Input"; 
import AddressFields from '../../../services/models/AddressService';

const Step2 = () => {

  return (
    <>
      <h2>Endereço</h2>
      {AddressFields.map((field) => 
        <InputComponent 
          key={field.name}
          id={field.name}
          name={field.name}
          type={field.type}
          placeholder={`Digite ${field.label.replace(':', " ")}`}
          label={field.label}
          rules={{
            required: `${field.label.replace(':', " ")} é obrigatório`,
          }}
        />  
      )} 
    </>
  );
};

export default Step2;
