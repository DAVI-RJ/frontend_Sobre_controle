import Form from "@/shared/components/molecules/form/Form";
import InputComponent from "@/shared/components/atoms/inputs/Input";
import ButtonComponent from "@/shared/components/atoms/button/Button";
import CancelIcon from "@mui/icons-material/Cancel";

import { useState } from "react";
import { useProducts } from "../hooks/useProducts";

import "./product-style.css";

export default function EditProductForm({ item, onClose }) {
  const { mutateProduct } = useProducts();
  const [formData, setFormData] = useState(item);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutateProduct(formData);
    onClose();
  };

  return (
    <section className="product-edit-form">
      <header className="product-form-header">
        {/**Titulo */}
        <h1>Editar Produto</h1>
        <p> Atualize as informações do produto.</p>
      </header>
      {/** Formulário suspenso*/}
      <Form onSubmit={handleSubmit}>
        <div className="product-form-fields">
          <label>Nome</label>
          <InputComponent name="name" value={formData.name} onChange={handleChange} />

          <label>Preço</label>
          <InputComponent name="price" value={formData.price} onChange={handleChange} />

          <label>Quantidade</label>
          <InputComponent name="quantity" value={formData.quantity} onChange={handleChange} />
        </div>
        <nav className="product-form-option">
          <ButtonComponent type="button" onClick={onClose} className={"cancelar-button"}>
            Cancelar
          </ButtonComponent>

          <ButtonComponent type="submit" className={"confirm-button"}>
            Atualizar
          </ButtonComponent>
        </nav>
      </Form>
    </section>
  );
}
