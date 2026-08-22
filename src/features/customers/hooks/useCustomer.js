import { useCallback, useState } from "react";

import { createCustomer } from "../api/createCustomer";
import { listCustomers } from "../api/listCustomers";
import { deleteCustomer } from "../api/deleteCustomer";
import { customerSchema } from "@/domain/schemas/customerSchema";
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
    async (customerData) => {
      setLoading(true);
      customerSchema.parse(customerData);
      try {
        const newCustomer = await createCustomer(customerData);
        const validatedCustomer = customerSchema.parse(newCustomer);
        setCustomer((prev) => [...prev, validatedCustomer]);
      } catch (error) {
        handleError(error);
        log.info("error ao carregar a lista, useCustomer");
      } finally {
        setLoading(false);
      }
    },
    [handleError]
  );

  const onDeleteCustomer = useCallback(
    async (idCustomer) => {
      setLoading(true);
      try {
        await deleteCustomer(idCustomer);
        setCustomer((prev) => prev.filter((c) => c.id !== idCustomer));
      } catch (error) {
        handleError(error);
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
    onDeleteCustomer,
  };
}
