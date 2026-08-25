import { useCallback, useState } from "react";
import { listSuppliers } from "../api/listSuppliers";
import { createSupplier } from "../api/createSupplier";
import { useError } from "@/core/context/error/ErrorProvider";

export const useSupplier = () => {
  const [loading, setLoading] = useState(false);
  const [supplier, setSupplier] = useState();
  const { handleError } = useError();

  const fetchListSuppliers = useCallback(async () => {
    const data = await listSuppliers();
    return data || [];
  }, []);

  const submitFormSupplier = async (supplirData) => {
    setLoading(true);
    try {
      await createSupplier(supplirData);
      setSupplier(supplier);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    supplier,
    loading,
    fetchListSuppliers,
    submitFormSupplier,
  };
};
