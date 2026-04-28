import { useCallback, useState } from "react";

import { useAxiosErrorHandler } from "@/context/error/useErrorContext";
import { createCustomer } from "../customerApi/createCustomer";
import { getCustomers } from "../customerApi/listCustomers";
import log from "@/services/logger/logger";

// Ganchos uteis para intanciar o cliente
export function useCustomers() {
  const [customer, setCustomer] = useState([]); // Objeto ou Null
  const [loading, setLoading] = useState(false);
  const { errorMessage, setErrorMessage, handleError } = useAxiosErrorHandler(null);

  // Metódo para usar a API de criação, lançar erros, UI.
  const handleListCustomers = useCallback(async () => {
    setLoading(true);
    try {
      const listCustomer = await getCustomers();
      if (listCustomer) {
        setCustomer(listCustomer);
        log.info("scesso ao carregar a lista, useCustomer");
      }
    } catch (error) {
      log.info("error ao carregar a lista, useCustomer");
      const message = error.response?.data?.message || error.message || "Error carregar a lista";
      handleError?.(message);
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCustomer = useCallback(async (dataCustomer) => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const newCustomer = await createCustomer(dataCustomer);
      setCustomer(newCustomer);
    } catch (error) {
      const message = error.response?.data?.message || error.message || "Error create client";
      handleError?.(message);
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    customer,
    loading,
    errorMessage,
    handleListCustomers,
    handleCustomer,
  };
}
