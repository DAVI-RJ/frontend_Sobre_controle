import React, {useState} from "react";
import Form from "../form/Form";
import InputComponent from "../../atoms/inputs/Input";
import ButtonComponent from "../../atoms/button/Button"

export default function ProductForm (){
  return (
    <div>
      <Form>
        <InputComponent
          name="email"
          type="email"
          label="Email:"
          placeholder="Digite seu email"
          rules={{
            required: { value: true, message: "O email é obrigatório" },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Digite um email válido"
            }
          }}
        />
        <ButtonComponent>Submit</ButtonComponent>
      </Form>
    </div>
  );
}
