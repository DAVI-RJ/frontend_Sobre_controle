import { useQuery } from "@tanstack/react-query";

import LoadingComponent from "@/shared/components/organisms/loading/LoadingComponent";
import ErrorMessage from "@/shared/components/atoms/errors/ErrorMessage";
import ListGroup from "@/shared/components/molecules/listComponent/ListGroup";
import DataTable from "@/shared/components/organisms/table/DataTable";
import { setTableProduct } from "@/domain/schemas/productSchema";

import { useProducts } from "../hooks/useProducts";

export default function ProductList() {
  const { loadProducts, deleteProduct } = useProducts();

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: loadProducts,
  });

  if (isLoading) {
    return <LoadingComponent isLoading={isLoading} />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <ListGroup>
      <DataTable
        columns={setTableProduct}
        data={products || []}
        getRowKey={(product) => product.id}
        actions={{
          delete: deleteProduct,
        }}
      />
    </ListGroup>
  );
}
