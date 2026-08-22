import { useQuery } from "@tanstack/react-query";

import { useProducts } from "../hooks/useProducts";
import ListGroup from "@/shared/components/molecules/listComponent/ListGroup";
import DataTable from "@/shared/components/organisms/table/DataTable";
import setTableProduct from "@/domain/schemas/productSchema";
import LoadingComponent from "@/shared/components/organisms/loading/LoadingComponent";
import ErrorMessage from "@/shared/components/atoms/errors/ErrorMessage";

export default function ProductList() {
  const { fetchListProducts } = useProducts();

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchListProducts,
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
      />
    </ListGroup>
  );
}
