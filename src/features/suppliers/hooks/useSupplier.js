import { useCallback } from "react";
import { listSuppliers } from "../api/listSuppliers";
import { useError } from "@/core/context/error/ErrorProvider";

export const useSupplier = () => {
  const { handleError } = useError();

  const fetchListSuppliers = useCallback(async () => {
    const data = await listSuppliers();
    return data || [];
  }, [handleError]);

  return {
    fetchListSuppliers,
  };
};
