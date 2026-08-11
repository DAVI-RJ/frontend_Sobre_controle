import { useNavigate } from "react-router-dom";

import Form from "@/shared/components/molecules/form/Form";
import InputComponent from "@/shared/components/atoms/inputs/Input";
import ButtonComponent from "@/shared/components/atoms/button/Button";
import { productModel } from "@/domain/models/productModel";

import "./product-form.css";

export default function ProductComponent({ onAdd }) {
  const navigate = useNavigate();
  const onSubmit = (data) => {
    onAdd(data);
    setTimeout(() => {
      navigate("/home");
    }, 500);
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
