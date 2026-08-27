import { useState, useCallback } from "react";
import log from "@/core/logger/logger";

import { getProducts } from "../api/listProducts";
import { createProduct } from "../api/createProduct";
import { useError } from "@/core/context/error/ErrorProvider";

// hook responsável pela interface, erros e estado
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const { handleError } = useError();

  // requisição GET/
  const fetchListProducts = useCallback(async () => {
    const data = await getProducts();
    log.info("data: ", data);
    return data || [];
  }, [handleError]);

  // cadastro de produtos, POST/
  const addProduct = useCallback(
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

  return {
    products,
    fetchListProducts,
    addProduct,
  };
};
