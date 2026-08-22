import { useQuery } from "@tanstack/react-query";

import { useCustomers } from "../hooks/useCustomer";
import ListGroup from "@/shared/components/molecules/listComponent/ListGroup";
import DataTable from "@/shared/components/organisms/table/DataTable";
import { setTableCustomer } from "@/domain/schemas/customerSchema";
import LoadingComponent from "@/shared/components/organisms/loading/LoadingComponent";
import ErrorMessage from "@/shared/components/atoms/errors/ErrorMessage";

export default function CustomerList() {
  const { fetchListCustomers } = useCustomers();
  const {
    data: customers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["customer"],
    queryFn: fetchListCustomers,
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
        columns={setTableCustomer}
        data={customers || []}
        getRowKey={(row) => row.id || row.cnpj}
      />
    </ListGroup>
  );
}
