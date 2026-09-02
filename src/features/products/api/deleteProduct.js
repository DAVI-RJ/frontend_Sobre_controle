import { axiosInstance } from "@/core/http/axiosInstance";

export async function destroyProduct(id) {
  const response = await axiosInstance.delete(`/company/:companyId/products/${id}`);
  return response;
}
