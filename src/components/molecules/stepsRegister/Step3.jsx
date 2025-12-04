import React from 'react';
import InputComponent from "../../atoms/inputs/Input"; 
//import { Watch } from 'react-hook-form';

const Step3 = () => {
  return (
    <>
      <h2>Segurança</h2>
      
      <InputComponent 
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
        label="Senha:"
        rules={{
          require: "Enter your password",
          minLength: {
            value: 8,
            message: "Password must be a minimum of 8 characters.",  
          }, 
          pattern: { 
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).*$/,
            message: "Must include uppercase, lowercase, numbers, and special characters.",
          },
        }
      }
      />

      <InputComponent 
        id="passwordConfirm"x
        name="passwordConfirm"
        type="password" 
        placeholder="Confirm password "
        label="Confirma a Senha:"
        rules={{
          required: "Confirme sua senha",
          //validate: (value) => value === Watch("password") || "As senhas não coincidem"
        }}
                
      />
    </>
  );
};

export default Step3;