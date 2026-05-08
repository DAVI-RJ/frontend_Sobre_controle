import { useCallback, useState } from "react";

import { createCustomer } from "../api/createCustomer";
import { listCustomers } from "../api/listCustomers";
import log from "@/core/logger/logger";
import { useError } from "@/core/context/error/ErrorProvider";

// Ganchos uteis para intanciar o cliente
export function useCustomers() {
  const [customer, setCustomer] = useState([]); // Objeto ou Null
  const [loading, setLoading] = useState(false);
  const { handleError } = useError();

  // Metódo para usar a API de criação, lançar erros, UI.
  const fetchListCustomers = useCallback(async () => {
    setLoading(true);
    try {
      const listCustomer = await listCustomers();
      if (listCustomer) {
        setCustomer(listCustomer);
        log.info("sucesso ao carregar a lista, useCustomer");
        return listCustomer;
      }
      return [];
    } catch (error) {
      log.info("error ao carregar a lista, useCustomer");
      handleError(error);
    } finally {
      setLoading(false);
    }
  }, [handleError]);

  const submitRegisterCustomer = useCallback(
    async (dataCustomer) => {
      setLoading(true);
      try {
        const newCustomer = await createCustomer(dataCustomer);
        setCustomer(newCustomer);
      } catch (error) {
        handleError(error);
        log.info("error ao carregar a lista, useCustomer");
      } finally {
        setLoading(false);
      }
    },
    [handleError]
  );

  return {
    customer,
    loading,
    fetchListCustomers,
    submitRegisterCustomer,
  };
}
