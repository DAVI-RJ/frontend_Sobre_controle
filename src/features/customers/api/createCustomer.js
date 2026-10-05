import { axiosInstance } from "@/core/http/axiosInstance";

export async function createCustomer(data) {
  const response = await axiosInstance.post("/company/:companyId/customer", data);
  return response.data;
}
