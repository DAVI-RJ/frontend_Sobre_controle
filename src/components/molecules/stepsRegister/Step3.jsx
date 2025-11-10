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
        id="confirmPassword"
        name="confirmPassword"
        type="password" 
        placeholder="Confirm password "
        label="Confirma a Senha:"
        rules={{
          require: "Password, must be same."
        }}
                
      />
    </>
  );
};

export default Step3;