// components
import ListGroup from "@/shared/components/molecules/listComponent/ListGroup";
import DataTable from "@/shared/components/organisms/table/DataTable";
import LoadingComponent from "@/shared/components/organisms/loading/LoadingComponent";
import ErrorMessage from "@/shared/components/atoms/errors/ErrorMessage";

// schema (table)
import { setTableSuppliers } from "@/domain/schemas/supplierSchema";

// hook
import { useSupplier } from "../hooks/useSupplier";

export default function SupplierList() {
  const { supplier, isLoading, error, deleteSupplier } = useSupplier();

  // feedback para loading = true
  if (isLoading) {
    return <LoadingComponent isLoading={isLoading}></LoadingComponent>;
  }

  // feedback para error = true
  if (error) {
    return <ErrorMessage />;
  }

  // handler é disparado pelo usuário
  const handleDeleteSupplier = (supplierId) => {
    deleteSupplier(supplierId);
  };

  return (
    <ListGroup>
      <DataTable
        columns={setTableSuppliers}
        data={supplier || []}
        getRowKey={(row) => row.id}
        actions={{
          delete: handleDeleteSupplier,
        }}
      />
    </ListGroup>
  );
}
