import React from "react";
import { useForm } from "react-hook-form";
import Form from "../form/Form";
import InputComponent from "../../atoms/inputs/Input";
import ButtonComponent from "../../atoms/button/Button";
import { productModel} from "../../../services/models/ProductService";

export default function ProductForm({ onAdd }) {
  const methods = useForm({
    defaultValues: productModel,
    mode: "onChange"
  });

  const onSubmit = (data) => {
    console.log('Form data:', data);  // debug
    onAdd(data);
    methods.reset();
  };

  return (
    <section>
      <h2>Cadastro de Produtos</h2>
      <Form onSubmit={onSubmit}>
        {productModel.map((field) => (
          <InputComponent
            key={field.name}
            name={field.name}
            type={field.type}
            label={field.label}
            placeholder={field.placeholder}
            rules={{
              required: `${field.label} é obrigatório`,
              minLength: field.minLength && {
                value: field.minLength,
                message: `Mínimo de ${field.minLength} caracteres`
              }
            }}
          />
        ))}
        <ButtonComponent
          type="submit"
          >Submit
        </ButtonComponent>
      </Form>
    </section>
  );
}