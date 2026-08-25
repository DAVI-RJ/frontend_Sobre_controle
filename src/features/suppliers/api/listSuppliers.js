import { axiosInstance } from "@/core/http/axiosInstance";

export async function listSuppliers() {
  const response = await axiosInstance.get("/company/supplier/list");
  return response;
}
