import React from 'react';
import InputComponent from "../../atoms/inputs/Input"; 

const Step1 = () => {

  return (
    <div>
        <h2>Dados da Empresa</h2>
        <InputComponent 
          id="nameCompany"
          name="nameCompany"
          type="text" 
          placeholder="digita o nome da sua company"
          label="nome da empresa:"
        />
        <InputComponent 
          id="cnpj"
          name="cnpj"
          type="text" 
          placeholder="digita seu cnpj"
          label="CNPJ da empresa:"
        />
        <InputComponent 
          id="representative"
          name="representative"
          type="text" 
          placeholder="digite o seu nome"
          label="Representante da empresa:"
        />

        <InputComponent 
          id="email"
          name="email"
          type="email"
          placeholder="digita seu email" 
          label="email:"
        />      
    </div>
    );
  };

export default Step1;
