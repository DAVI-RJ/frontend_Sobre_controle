import { useEffect } from "react";
import { useCustomers } from "@/features/customers/hooks/useCustomer";

import "./list-group.css"; 

export default function ListComponent(){
  const { customer, handleListCustomers, loading, errorMessage } = useCustomers();

  useEffect(() => {
    handleListCustomers();
  });

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