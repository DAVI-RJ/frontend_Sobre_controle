import { useState, useCallback } from "react";

import { getProducts } from "../api/listProducts";
import { createProduct } from "../api/createProduct";
import { useError } from "@/core/context/error/ErrorProvider";

// hook responsável pela interface, erros e estado
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { handleError } = useError();

  // requisição GET/
  const fetchListProducts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getProducts();
      setProducts(data || []);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
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
    loading,
    fetchListProducts,
    addProduct,
  };
};

export default useProducts;
