import InputComponent from "../../atoms/inputs/Input"; 
import AddressFields from "../../../models/AddressModel";

import "./StepClass.css"; 

const Step2 = () => {

  return (
    <div className= "step-class">
      <h2>Endereço</h2>
      {AddressFields.map((field) => 

      // Formulario organizado lado a lado 
        <InputComponent
          className={
            field.name === "street" ? "span-2" :
            field.name === "number" ? "col-1" :
            field.name === "neighborhood" ? "col-2" :
            field.name === "city" ? "col-1" :
            field.name === "state" ? "col-2" :
            ""
          }
           
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
    </div>
  );
};

export default Step2;
