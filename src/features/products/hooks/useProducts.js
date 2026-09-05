import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import log from "@/core/logger/logger";

import { getProducts } from "../api/listProducts";
import { createProduct } from "../api/createProduct";
import { destroyProduct } from "../api/deleteProduct";

import { useError } from "@/core/context/error/ErrorProvider";
import { updateProduct } from "../api/updateProduct";

// hook responsável pela interface, erros, chamadas api e estado globais da feature com carregamento em cache

export const useProducts = () => {
  const { handleError } = useError();
  const queryClient = useQueryClient();

  // Listagem, requisição GET/
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        return (await getProducts()) || [];
      } catch (error) {
        handleError(error);
      }
    },
  });

  // Cadastro, requisição POST/
  const saveProduct = useMutation({
    mutationFn: createProduct,
    onSuccess: (newProduct) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      return newProduct;
    },
    onError: (error) => handleError(error),
  });

  // Atualização, requisição UPDATE/
  const mutateProduct = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => handleError(error),
  });

  // Exclusão, requisição DELETE/
  const deleteProduct = useMutation({
    mutationFn: destroyProduct,
    onSuccess: (productId) => {
      if (productId) {
        log.info({ feature: "produto", action: "deleted" });
      }
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => handleError(error),
  });

  return {
    products,
    isLoading,
    error,
    saveProduct: saveProduct.mutateAsync,
    mutateProduct: mutateProduct.mutateAsync,
    deleteProduct: deleteProduct.mutateAsync,
  };
};
