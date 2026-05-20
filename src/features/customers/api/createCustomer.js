import { axiosInstance } from "@/core/http/axiosInstance";

export async function createCustomer(data) {
  const response = await axiosInstance.post("/company/customer", data);

  return response.data;
}
