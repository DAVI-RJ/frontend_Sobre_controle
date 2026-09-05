import LoadingComponent from "@/shared/components/organisms/loading/LoadingComponent";
import ErrorMessage from "@/shared/components/atoms/errors/ErrorMessage";
import ListGroup from "@/shared/components/molecules/listComponent/ListGroup";
import DataTable from "@/shared/components/organisms/table/DataTable";
import EditProductForm from "./EditProductForm";
import { setTableProduct } from "@/domain/schemas/productSchema";

import { useProducts } from "../hooks/useProducts";
import { useState } from "react";

import "./product-style.css";

export default function ProductList() {
  const { products, isLoading, error, deleteProduct } = useProducts();
  const [editingItem, setEditingItem] = useState(null);

  if (isLoading) {
    return <LoadingComponent isLoading={isLoading} />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  const handleDeleteProduct = (productId) => {
    deleteProduct(productId);
  };

  const handleEditProduct = (item) => {
    setEditingItem(item);
  };

  return (
    <ListGroup>
      <DataTable
        columns={setTableProduct}
        data={products || []}
        getRowKey={(product) => product.id}
        actions={{
          delete: handleDeleteProduct,
          edit: handleEditProduct,
        }}
      />
      {editingItem && (
        <div className="product-edit-ovelay">
          <EditProductForm item={editingItem} onClose={() => setEditingItem(null)} />
        </div>
      )}
    </ListGroup>
  );
}
