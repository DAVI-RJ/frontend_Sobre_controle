import Form from "@/shared/components/molecules/form/Form";
import InputComponent from "@/shared/components/atoms/inputs/Input";
import ButtonComponent from "@/shared/components/atoms/button/Button";
import CancelIcon from "@mui/icons-material/Cancel";

import { productSchema } from "@/domain/schemas/productSchema";
import { useProducts } from "../hooks/useProducts";

import "./product-style.css";

export default function EditProductForm({ item, onClose }) {
  const { mutateProduct } = useProducts();

  const handleSubmit = async (data) => {
    await mutateProduct({
      ...data,
      id: item.id,
    });

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
      <Form onSubmit={handleSubmit} defaultValues={item} schema={productSchema}>
        <div className="product-form-fields">
          <label>Nome</label>
          <InputComponent name="name" />

          <label>Preço</label>
          <InputComponent name="price" />

          <label>Quantidade</label>
          <InputComponent name="quantity" />

          <label>Descrição</label>
          <InputComponent name="description" type="textarea" />
        </div>
        <nav className="product-form-option">
          <ButtonComponent type="button" onClick={onClose} className={"cancel-button"}>
            <CancelIcon />
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
