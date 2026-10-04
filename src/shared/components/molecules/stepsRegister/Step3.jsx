import React from "react";
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
        label="Password:"
        // passar uma regra para comparar senhas
      />

      <InputComponent
        id="passwordConfirm"
        name="passwordConfirm"
        type="password"
        placeholder="Confirm password "
        label="Confirm Password:"
        // comparar senha
      />
    </>
  );
};

export default Step3;
