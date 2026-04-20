import { useEffect } from "react";
import { useCustomerHooks } from "@/features/products/hooks/CustomerHooks";

export default function ListComponent(){
  const { customer, handleListCustomers, loading, errorMessage } = useCustomerHooks();

  useEffect(() => {
    handleListCustomers();
  }, []);

  if(loading) return <p>Carregando...</p>
  if(errorMessage) return <p>{errorMessage}</p>
  return (
    <div>
      <h3>Lista de Clientes</h3>
      <ul>
        {customer.map((c, index) => (
          <li key={index}>{c.name}</li>
        ))}
      </ul>
    </div>
  )
}