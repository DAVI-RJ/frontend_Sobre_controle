import { axiosInstance } from "@/core/http/axiosInstance";

export async function getCustomers() {
  const response = await axiosInstance.get("/company/customers/list");
  return response.data;
}
