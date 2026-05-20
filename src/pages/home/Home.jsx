// HOOKS
import React, { useEffect, useState } from "react";
import useProducts from "@/features/products/hooks/useProducts";

// COMPONENTES
import HomeLayout from "@/shared/components/templates/HomeLayout";
import CardComponent from "@/shared/components/molecules/cards/Card";
import SidebarComponent from "@/shared/components/organisms/sidebar/Sidebar";
import ProductComponent from "@/features/products/components/productForm/ProductForm";
import CustomerComponent from "@/features/customers/components/customerForm/CustomerForm";
import SupplierComponent from "@/features/supplirs/components/supplierForm/SupplierForm";
import ListCustomersComponent from "@/features/customers/components/ListCustomers";

// CSS
import "./home-style.css";

export default function Home() {
  const { products, addProduct, handleProducts } = useProducts();
  const [view, setView] = useState("list-products");

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

  // ProductComponent = FormProduct
  return (
    <HomeLayout>
      <SidebarComponent setView={setView} />
      <div className={`section-content ${view === "list-products" ? "list-products" : ""}`}>
        {view === "new-product" && <ProductComponent onAdd={addProduct} />}
        {view === "list-products" && renderProductList()}
        {view === "list-customer" && <ListCustomersComponent />}
        {view === "new-customer" && <CustomerComponent />}
        {view === "new-supplier" && <SupplierComponent />}
      </div>
    </HomeLayout>
  );
}
