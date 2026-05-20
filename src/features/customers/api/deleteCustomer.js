import { axiosInstance } from "@/core/http/axiosInstance";

export async function deleteCustomer(data) {
  const response = await axiosInstance.post("/company/delete", data);

  if (response) return response.message;
}
