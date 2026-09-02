import { axiosInstance } from "@/core/http/axiosInstance";

export async function updateProduct(data) {
  const response = await axiosInstance.put(`/company/:companyId/products/${data.id}`, data);
  return response;
}
