import React from 'react';

import InputComponent from "../../atoms/inputs/Input"; 

const Step2 = () => {

  return (
    <div>
      <h2>Endereço</h2>
      <InputComponent 
        id="street"
        name="street"
        type="text" 
        placeholder="Rua"
        label="Rua:"
        
      />

      <InputComponent 
        id="number"
        name="number"
        type="text"
        placeholder="Number" 
        label="Numero:"
      />

      <InputComponent 
        id="city"
        name="city"
        type="text" 
        placeholder="Cidade"
        label="Cidade:"
      />

      <InputComponent 
        id="zip"
        name="zip"
        type="text" 
        placeholder="CEP"
        label="CEP:"
      />

    </div>
  );
};

export default Step2;
