import React, {useState} from 'react';
import InputComponent from "../../atoms/inputs/Input"; 

const companyFields = [
  {
    id: "nameCompany",
    name: "nameCompany",
    type: "text",
    label: "Nome da empresa:",
    placeholder: "Digite o nome da sua empresa"
  },
  {
    id: "cnpj",
    name: "cnpj",
    type: "text",
    label: "CNPJ da empresa:",
    placeholder: "Digite seu CNPJ"
  },
  {
    id: "representative",
    name: "representative",
    type: "text",
    label: "Representante da empresa:",
    placeholder: "Digite o nome do representante"
  },
  {
    id: "email",
    name: "email",
    type: "email",
    label: "Email:",
    placeholder: "Digite seu email"
  }
]

const Step1 = () => {
  const [ costumers, setCostumers] = useState()
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
