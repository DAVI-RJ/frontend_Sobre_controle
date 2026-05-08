import { useQuery } from "@tanstack/react-query";

import ListGroup from "@/shared/components/molecules/listComponent/ListGroup";
import { useCustomers } from "../hooks/useCustomer";
import LoadingComponent from "@/shared/components/organisms/loading/LoadingComponent";
import { ErrorMessage } from "@/shared/components/atoms/errors/ErrorMessage";

export default function ListCustomersComponent() {
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
      <ul>
        {customers && customers.length > 0 ? (
          customers.map((customer) => <li key={customer.id}>{customer.name}</li>)
        ) : (
          <p>Lista vazia</p>
        )}
      </ul>
    </ListGroup>
  );
}
