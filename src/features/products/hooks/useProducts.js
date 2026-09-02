import { useState, useCallback } from "react";
import log from "@/core/logger/logger";

import { getProducts } from "../api/listProducts";
import { createProduct } from "../api/createProduct";
import { destroyProduct } from "../api/deleteProduct";

import { useError } from "@/core/context/error/ErrorProvider";
import { updateProduct } from "../api/updateProduct";

// hook responsável pela interface, erros, chamadas api e estado globais da feature
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const { handleError } = useError();

  // Cadastro, requisição POST/
  const saveProduct = useCallback(
    async (data) => {
      try {
        const newProduct = await createProduct(data);
        setProducts((prev) => [newProduct, ...prev]);
        return newProduct;
      } catch (error) {
        handleError(error);
      }
    },
    [handleError]
  );

  // Listagem, requisição GET/
  const loadProducts = useCallback(async () => {
    const data = await getProducts();
    log.info("data: ", data);
    return data || [];
  }, [handleError]);

  // Atualização, requisição UPDATE/
  const mutateProduct = async (data) => {
    try {
      await updateProduct(data);
    } catch (error) {
      handleError(error);
    }
  };

  // Exclusão, requisição DELETE/
  const deleteProduct = async (data) => {
    log.info("primeira chamada");

    try {
      const deleteProductId = await destroyProduct(data);
      if (deleteProductId) {
        log.info({ feature: "produto", action: "deleted" });
      }
    } catch (error) {
      handleError(error);
    }
  };

  return {
    products,
    loadProducts,
    saveProduct,
    deleteProduct,
    mutateProduct,
  };
};
