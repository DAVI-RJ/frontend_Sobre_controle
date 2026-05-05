import Form from "../form/Form";
import InputComponent from "../../atoms/inputs/Input";
import ButtonComponent from "../../atoms/button/Button";
import { productModel } from "@/domain/models/productModel";

import "./product-form.css";

export default function ProductComponent({ onAdd }) {
  const onSubmit = (data) => {
    onAdd(data);
  };

  return (
    <section className="form-product">
      <h3>Cadastro de Produtos</h3>
      <Form onSubmit={onSubmit}>
        {productModel.map((field) => (
          <InputComponent
            key={field.id}
            name={field.name}
            type={field.type}
            label={field.label}
            placeholder={field.placeholder}
            rules={{
              required: `${field.label} is required`,
              minLength: field.minLength && {
                value: field.minLength,
                message: `Minimum of ${field.minLength} characters required`,
              },
            }}
          />
        ))}
        <ButtonComponent type="submit">Adicionar</ButtonComponent>
      </Form>
    </section>
  );
}
