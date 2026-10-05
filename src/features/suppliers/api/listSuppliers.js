import { axiosInstance } from "@/core/http/axiosInstance";

export async function getSuppliers() {
  const response = await axiosInstance.get("/company/supplier/list");
  return response.data;
}
