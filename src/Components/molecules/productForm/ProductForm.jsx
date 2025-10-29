import React from "react";
import { useForm } from "react-hook-form";
import Form from "../form/Form";
import InputComponent from "../../atoms/inputs/Input";
import ButtonComponent from "../../atoms/button/Button";
import { productModel, productFields, validationRules, getInputType } from "../../../services/Hooks/ProductService";

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
        {productFields.map((field) => (
          <InputComponent
            key={field.id}
            name={field}
            type={getInputType(productModel[field])}
            label={field}
            placeholder={`Digite o ${field}`}
            rules={validationRules[field]}
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