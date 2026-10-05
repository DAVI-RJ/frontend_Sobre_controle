// caches & state
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// api
import { createSupplier } from "../api/createSupplier";
import { getSuppliers } from "../api/listSuppliers";
import { destroySupplier } from "../api/deleteSupplier";

// hook
import { useError } from "@/core/context/error/ErrorProvider";

// debug
import log from "@/core/logger/logger";

export const useSupplier = () => {
  const { handleError } = useError();
  const queryClient = useQueryClient();

  const {
    data: supplier = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["suppliers"],
    queryFn: async () => {
      try {
        return (await getSuppliers()) || [];
      } catch (error) {
        handleError(error);
        log.info({ feature: "supllier", action: "list" });
        throw error;
      }
    },
  });

  const saveSupplier = useMutation({
    mutationFn: createSupplier,
    onSuccess: (newSupplier) => {
      queryClient.invalidateQueries({
        queryKey: ["suppliers"],
      });

      return newSupplier;
    },
    onError: (error) => handleError(error),
  });

  const deleteSupplier = useMutation({
    mutationFn: destroySupplier,
    onSuccess: (supplierId) => {
      if (supplierId)
        queryClient.invalidateQueries({
          queryKey: ["suppliers"],
        });
    },

    onError: (error) => handleError(error),
  });

  return {
    supplier,
    isLoading,
    error,
    saveSupplier: saveSupplier.mutateAsync,
    deleteSupplier: deleteSupplier.mutateAsync,
  };
};
