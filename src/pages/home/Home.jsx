import React, { useState } from "react";
import { useProducts } from "@/features/products/hooks/useProducts";

// componentes
import HomeLayout from "@/shared/components/templates/HomeLayout";
import ContentContainer from "@/shared/components/organisms/container/Container";
import DashboardComponent from "@/shared/components/organisms/dashboard/Dashboard";
import CardComponent from "@/shared/components/molecules/cards/Card";

//PRODUCT
import ProductForm from "@/features/products/components/ProductForm";
import ProductList from "@/features/products/components/ProductList";

//CUSTOMER
import CustomerForm from "@/features/customers/components/CustomerForm";
import CustomerList from "@/features/customers/components/CustomerList";

// SUPLLIER
import SupplierComponent from "@/features/suppliers/components/SupplierForm";

/*Página inicial da aplicação. O layout HomeLayout organiza os componentes e a navegação entre views é controlada pelo estado view.*/

// CSS
import "./home-style.css";

export default function Home() {
  const [view, setView] = useState("list-products");
  const { products, addProduct } = useProducts();

  /* carrega a lista de products ao logar. Obs o [] será atualizado a cada renderização do componente ou handleProducts sera chamado. */
  const renderProductList = () =>
    products.length > 0 ? (
      products.map((product) => <CardComponent key={product.id} product={product} />)
    ) : (
      <p>Lista vazia</p>
    );

  const renderContent = () => {
    switch (view) {
      case "list-products":
        return <ProductList products={products} />;
      case "new-product":
        return <ProductForm addProduct={addProduct} />;
      case "list-customer":
        return <CustomerList />;
      case "new-customer":
        return <CustomerForm />;
      case "new-supplier":
        return <SupplierComponent />;
      default:
        return renderProductList();
    }
  };
  return (
    // home-style é a estilização principal da página.
    <div className="home-style">
      <HomeLayout setView={setView}>
        <DashboardComponent />

        <ContentContainer>{renderContent()}</ContentContainer>
      </HomeLayout>
    </div>
  );
}
