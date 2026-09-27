import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createCustomer } from "../api/createCustomer";
import { getCustomers } from "../api/listCustomers";
import { destroyCustomer } from "../api/deleteCustomer";
import log from "@/core/logger/logger";
import { useError } from "@/core/context/error/ErrorProvider";

// Ganchos uteis para intanciar o cliente
export const useCustomer = () => {
  const { handleError } = useError();
  const queryClient = useQueryClient();

  // Metódo para usar a API de listagem, criação, lançar erros, UI.
  const {
    data: customer = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      try {
        return (await getCustomers()) || [];
      } catch (error) {
        handleError(error);
        throw error;
      }
    },
  });

  const saveCustomer = useMutation({
    mutationFn: createCustomer,
    onSuccess: (newCustomer) => {
      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });

      return newCustomer;
    },

    onError: (error) => handleError(error),
  });

  const deleteCustomer = useMutation({
    mutationFn: destroyCustomer,
    onSuccess: (customerId) => {
      if (customerId) {
        log.info({ feature: "customer", action: "deleted" });
      }
      queryClient.invalidateQueries({
        queryKey: ["customer"],
      });
    },

    onError: (error) => handleError(error),
  });

  return {
    customer,
    isLoading,
    error,
    saveCustomer: saveCustomer.mutateAsync,
    deleteCustomer: deleteCustomer.mutateAsync,
  };
};
