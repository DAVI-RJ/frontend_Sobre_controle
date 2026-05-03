import { useState, useCallback } from "react";

import { getProducts } from "../productsApi/listProducts";
import { createProduct } from "../productsApi/createProduct";
import { useError } from "@/context/error/ErrorProvider";

// hook responsável pela interface, erros e estado
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { handleError } = useError();

  // requisição GET/
  const handleProducts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getProducts();
      setProducts(data || []);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  }, [getProducts]);

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
    [createProduct]
  );

  return {
    products,
    loading,
    handleProducts,
    addProduct,
  };
};

export default useProducts;
