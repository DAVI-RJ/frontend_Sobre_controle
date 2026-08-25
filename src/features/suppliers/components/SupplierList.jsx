import { useQuery } from "@tanstack/react-query";

import LoadingComponent from "@/shared/components/organisms/loading/LoadingComponent";
import ErrorMessage from "@/shared/components/atoms/errors/ErrorMessage";

import ListGroup from "@/shared/components/molecules/listComponent/ListGroup";
import DataTable from "@/shared/components/organisms/table/DataTable";
import { setTableSuppliers } from "@/domain/schemas/supplierSchema";

import { useSupplier } from "../hooks/useSupplier";

export default function SupplierList() {
  const { fetchListSuppliers } = useSupplier();

  const {
    data: suppliers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["supplier"],
    queryFn: fetchListSuppliers,
  });

  if (isLoading) {
    <LoadingComponent isLoading={isLoading} />;
  }

  if (error) {
    <ErrorMessage />;
  }

  return (
    <ListGroup>
      <DataTable
        columns={setTableSuppliers}
        data={suppliers || []}
        getRowKey={(row) => row.id}
      ></DataTable>
    </ListGroup>
  );
}
