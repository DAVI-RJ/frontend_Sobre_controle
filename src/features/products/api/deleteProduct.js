import { axiosInstance } from "@/core/http/axiosInstance";

export const destroyProduct = async (id) => {
  const response = axiosInstance.delete(`/company/:companyId/products/${id}`);
  return response;
};
