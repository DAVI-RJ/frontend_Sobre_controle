import { axiosInstance } from "@/core/http/axiosInstance";

export async function destroySupplier(supplierId) {
  const response = await axiosInstance.delete("/company/supplier", supplierId);
  return response;
}
