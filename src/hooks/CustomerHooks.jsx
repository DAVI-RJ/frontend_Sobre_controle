import { useCallback, useState } from "react";
import {CustomerServices} from "../services/customerApi/CustomerServices";

export function useCustomerHooks(){
  const [customer, setCustomer] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); 
  const {createCustomer} = CustomerServices(); 

  const handleCustomer = useCallback(
    async () => {
      setLoading(true); 
      setErrorMessage(null);
      try {
        setCustomer(customer)
      } catch (error) {
        setErrorMessage(error)
      }
    }, [createCustomer]);

    return (
      customer, 
      loading, 
      errorMessage,
      handleCustomer
    )
  }