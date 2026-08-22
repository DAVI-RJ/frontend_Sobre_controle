import { useCallback, useState } from "react";
import { listSuppliers } from "../api/listSuppliers";
import log from "@/core/logger/logger";
import { useError } from "@/core/context/error/ErrorProvider";

export default function useSupplier() {
  const [supplier, setSupplier] = useState([]);
  const [loading, setLoading] = useState(false);
  const { handleError } = useError();

  const fetchListSupplier = useCallback(async () => {
    setLoading(true);
    try {
      const listSupplier = await listSuppliers();
      if (listSupplier) {
        setSupplier(listSupplier);
        log.info("sucesso ao carregar a lista, useSuppliers");
        return listSupplier;
      }
      return [];
    } catch (error) {
      log.info("error ao carregar a lista, useSuppliers");
      handleError(error);
    } finally {
      setLoading(false);
    }
  }, [handleError]);

  return {
    supplier,
    loading,
    fetchListSupplier,
  };
}
