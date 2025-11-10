import React, { useEffect, useState } from 'react';
import InputComponent from "../../atoms/inputs/Input";
import { companyFields } from "../../../models/CompanyService";
import { customersFildes } from "../../../models/CustomersService";
import { supplierFildes } from "../../../models/SupplierService"; 

const Step1 = ({formType}) => {
  const [ formFields, setFormFields] = useState([]);
    
  useEffect(() => {
    if(formType === "company"){
      setFormFields(companyFields)
    }else if (formType === "customer"){
      setFormFields(customersFildes)
    }else if (formType === "supplier")
      setFormFields(supplierFildes)
  },[formType]); 
  

  return (
    <>
    {formFields.map((field) => 
      <InputComponent 
        key={field.name}
        id={field.name}
        name={field.name}
        type={field.type}
        placeholder={field.placeholder}
        label={field.label}         
        rules={{
            required: { 
              value: true,
              message: `${field.label} field is required` }
          }}
      />  
    )} 
  </>
  );
};

export default Step1;
