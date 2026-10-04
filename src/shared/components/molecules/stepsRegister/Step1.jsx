import React, { useEffect, useState } from "react";
import InputComponent from "../../atoms/inputs/Input";
import { companyFields } from "@/domain/models/companyModel";
import { customersFildes } from "@/domain/models/customersModel";
import { supplierFildes } from "@/domain/models/supplierModel";

export default function Step1({ formType }) {
  const [formFields, setFormFields] = useState([]);

  useEffect(() => {
    if (formType === "company") {
      setFormFields(companyFields);
    } else if (formType === "customer") {
      setFormFields(customersFildes);
    } else if (formType === "supplier") setFormFields(supplierFildes);
  }, [formType]);

  return (
    <div className="step-one">
      <h2>Dados</h2>
      
      {formFields.map((field) => (
        <InputComponent
          key={field.name}
          id={field.name}
          name={field.name}
          type={field.type}
          label={field.label}
          placeholder={field.placeholder}
          
        />
      ))}
    </div>
  );
};

