import React from 'react';
import InputComponent from "../../atoms/inputs/Input"; 

const Step3 = () => {
  return (
    <>
      <h2>Segurança</h2>
      
      <InputComponent 
        id="password"
        name="password"
        type="password"
        placeholder="digita sua senha "
        label="Senha:"
        required
      />

      <InputComponent 
        id="confirmPassword"
        name="confirmPassword"
        type="password" 
        placeholder="digita sua senha novamente "
        label="Confirma a Senha:"
        required
      />
    </>
  );
};

export default Step3;