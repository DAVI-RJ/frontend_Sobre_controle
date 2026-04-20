import { useCallback, useState } from "react";
import {CustomerServices} from "../services/customerApi/CustomerServices";

// Ganchos uteis para intanciar o cliente 
export function useCustomerHooks(){
  const [customer, setCustomer] = useState([]); // Objeto ou Null
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); 
  const {getCustomers, createCustomer} = CustomerServices(); 

  // Metódo para usar a API de criação, lançar erros, UI. 
  const handleListCustomers = useCallback(
    async () => {
      setLoading(true); 
      try{
        const listCustomer = await getCustomers();
        if(listCustomer){
          setCustomer(listCustomer); 
        }
        
      }catch(error){
        console.log("error ao carregar a lista")
        const message = error.response?.data?.message || error.message || "Error carregar a lista"; 
        setErrorMessage(message)
      } finally{
        setLoading(false);
      }
    }, [getCustomers])

  const handleCustomer = useCallback(
    async (dataCustomer) => {
      setLoading(true); 
      setErrorMessage(null);
      try {
        const newCustomer = await createCustomer(dataCustomer);
        setCustomer(newCustomer);
      } catch (error) {
        const message = error.response?.data?.message || error.message || "Error create client"; 
        setErrorMessage(message)
      } finally{
        setLoading(false);
      }
    }, [createCustomer]);

    return {
      customer, 
      loading, 
      errorMessage,
      handleListCustomers,
      handleCustomer
    }
  }