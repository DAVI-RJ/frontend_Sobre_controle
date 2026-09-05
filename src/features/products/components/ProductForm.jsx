import Form from "@/shared/components/molecules/form/Form";
import InputComponent from "@/shared/components/atoms/inputs/Input";
import ButtonComponent from "@/shared/components/atoms/button/Button";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";

import { productSchema } from "@/domain/schemas/productSchema";
import { productModel } from "@/domain/models/productModel";
import { useProducts } from "../hooks/useProducts";

import "./product-style.css";

import CardComponent from "@/shared/components/molecules/cards/Card";

export default function ProductForm() {
  const { saveProduct } = useProducts();

  const handleSaveProduct = async (data) => {
    await saveProduct(data);
  };

  return (
    <section className="product-form">
      <header className="product-form-header">
        {/**Titulo */}
        <h1>Cadastro de Produtos</h1>
        <p> Cadastre novos produtos no catalago</p>
      </header>

      <div className="product-form-body">
        {/** tudo que sera salvo no banco */}
        <Form onSubmit={handleSaveProduct} schema={productSchema}>
          <div className="product-form-media">
            <img className="product-form-image" src="" alt="" />
          </div>
          <div className="product-form-fields">
            {productModel.map((field) => (
              <InputComponent
                key={field.name}
                name={field.name}
                type={field.type}
                label={field.label}
                placeholder={field.placeholder}
                className={field.type == "textarea" ? "textarea" : ""}
              />
            ))}
          </div>
          <nav className="product-form-option">
            <ButtonComponent type="button" className={"cancel-button"}>
              <CancelIcon />
              cancelar
            </ButtonComponent>
            <ButtonComponent type="submit" className={"confirm-button"}>
              <AddIcon />
              Adicionar
            </ButtonComponent>
          </nav>
        </Form>

        {/**Suporte no cadastro, pretendo passa dados analisados, como melhor preço, percentual avaliativo*/}
        <aside className="product-form-analytics">
          <h2>Análise do produto</h2>
          {/*<CardComponent />*/}
          {/* informações calculadas */}
        </aside>
      </div>
    </section>
  );
}
