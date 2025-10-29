import React from "react";
import { useForm } from "react-hook-form";
import Form from "../form/Form";
import InputComponent from "../../atoms/inputs/Input";
import ButtonComponent from "../../atoms/button/Button"

export default function ProductForm({ onAdd }) {
  const methods = useForm({
    defaultValues: {
      product: ""
    }
  });

  const onSubmit = (data) => {
    if (data.product.trim()) {
      onAdd(data.product.trim());
      methods.reset(); // limpa o formulário após submissão
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <InputComponent
        name="product"
        type="text"
        label="Produto:"
        placeholder="Digite o nome do produto"
        rules={{ 
          required: "Nome do produto é obrigatório",
          minLength: {
            value: 3,
            message: "Mínimo de 3 caracteres"
          }
        }}
      />
      <ButtonComponent type="submit">Adicionar</ButtonComponent>
    </Form>
  );
}