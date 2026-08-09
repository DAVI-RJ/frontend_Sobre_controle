// HOOKS
import React, { useEffect, useState } from "react";
import useProducts from "@/features/products/hooks/useProducts";

// COMPONENTES
import HomeLayout from "@/shared/components/templates/HomeLayout";
import ContentContainer from "@/shared/components/organisms/container/Container";
import DashboardComponent from "@/shared/components/organisms/dashboard/Dashboard";
import CardComponent from "@/shared/components/molecules/cards/Card";
import ProductComponent from "@/features/products/components/productForm/ProductForm";
import CustomerComponent from "@/features/customers/components/customerForm/CustomerForm";
import SupplierComponent from "@/features/suppliers/components/supplierForm/SupplierForm";
import ListCustomersComponent from "@/features/customers/components/ListCustomers";

// CSS
import "./home-style.css";

export default function Home() {
  const [view, setView] = useState("list-products");
  const { products, addProduct, handleProducts } = useProducts();

  // carrega a lista de products ao logar
  useEffect(() => {
    handleProducts();
  }, []);

  const renderProductList = () =>
    products.length > 0 ? (
      products.map((product) => <CardComponent key={product.id} product={product} />)
    ) : (
      <p>Lista vazia</p>
    );

  const renderContent = () => {
    switch (view) {
      case "list-products":
        return renderProductList();
      case "new-product":
        return <ProductComponent addProduct={addProduct} />;
      case "list-customer":
        return <ListCustomersComponent />;
      case "new-customer":
        return <CustomerComponent />;
      case "new-supplier":
        return <SupplierComponent />;
      default:
        return renderProductList();
    }
  };
  return (
    <HomeLayout setView={setView}>
      <DashboardComponent />

      <ContentContainer>{renderContent()}</ContentContainer>
    </HomeLayout>
  );
}
