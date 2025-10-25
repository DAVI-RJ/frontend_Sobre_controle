import React, {useState} from "react";
import Form from "../Form";
import InputComponent from "../../form/formComponentes/Input";

export default function ProductForm (){


  return (
    <div>
      <h1>Ola mundo</h1>
    
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
      </Form>
    </div>
  );
}
