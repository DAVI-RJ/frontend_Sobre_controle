import { useQuery } from "@tanstack/react-query";

import LoadingComponent from "@/shared/components/organisms/loading/LoadingComponent";
import ErrorMessage from "@/shared/components/atoms/errors/ErrorMessage";

import ListGroup from "@/shared/components/molecules/listComponent/ListGroup";
import DataTable from "@/shared/components/organisms/table/DataTable";
import { setTableCustomers } from "@/domain/schemas/customerSchema";

import { useCustomer } from "../hooks/useCustomer";

export default function CustomerList() {
  const { fetchListCustomers } = useCustomer();
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
        columns={setTableCustomers}
        data={customers || []}
        getRowKey={(row) => row.id}
      />
    </ListGroup>
  );
}
