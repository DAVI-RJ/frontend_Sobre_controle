import LoadingComponent from "@/shared/components/organisms/loading/LoadingComponent";
import ErrorMessage from "@/shared/components/atoms/errors/ErrorMessage";
import ListGroup from "@/shared/components/molecules/listComponent/ListGroup";
import DataTable from "@/shared/components/organisms/table/DataTable";
import { setTableCustomers } from "@/domain/schemas/customerSchema";

import { useCustomer } from "../hooks/useCustomer";

export default function CustomerList() {
  const { customer, isLoading, error, deleteCustomer } = useCustomer();

  if (isLoading) {
    return <LoadingComponent isLoading={isLoading} />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  const handleDeleteCustomer = (customerId) => {
    deleteCustomer(customerId);
  };

  /*const handleEditCustomer = (customer) => {
    setEditingCustomer(customer)
  }*/
  return (
    <ListGroup>
      <DataTable
        columns={setTableCustomers}
        data={customer || []}
        getRowKey={(row) => row.id}
        actions={{
          delete: handleDeleteCustomer,
          //edit: handleEditCustomer,
        }}
      />
    </ListGroup>
  );
}
