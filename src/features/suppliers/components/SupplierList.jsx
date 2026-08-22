import { useQuery } from "@tanstack/react-query";

import useSupplier from "../hooks/useSupplier";
import LoadingComponent from "@/shared/components/organisms/loading/LoadingComponent";
import ErrorMessage from "@/shared/components/atoms/errors/ErrorMessage";
import ListGroup from "@/shared/components/molecules/listComponent/ListGroup";
import DataTable from "@/shared/components/organisms/table/DataTable";
import setTableSupplier from "@/domain/schemas/supplierSchema";

export default function SupplierList() {
  const { fetchListSupplier } = useSupplier();

  const {
    data: suppliers,
    isLoarding,
    error,
  } = useQuery({
    queryKey: ["suppliers"],
    queryFn: fetchListSupplier,
  });

  if (isLoarding) {
    <LoadingComponent />;
  }

  if (error) {
    <ErrorMessage />;
  }

  return (
    <ListGroup>
      <DataTable
        columns={setTableSupplier}
        data={suppliers}
        getRowKey={(row) => row.id}
      ></DataTable>
    </ListGroup>
  );
}
