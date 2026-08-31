import { useState, useCallback } from "react";
import log from "@/core/logger/logger";

import { getProducts } from "../api/listProducts";
import { createProduct } from "../api/createProduct";
import { destroyProduct } from "../api/deleteProduct";

import { useError } from "@/core/context/error/ErrorProvider";

// hook responsável pela interface, erros e estado
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const { handleError } = useError();

  // requisição GET/
  const loadProducts = useCallback(async () => {
    const data = await getProducts();
    log.info("data: ", data);
    return data || [];
  }, [handleError]);

  // cadastro de produtos, POST/
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
  };
};
