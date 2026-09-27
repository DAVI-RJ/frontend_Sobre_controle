import { axiosInstance } from "@/core/http/axiosInstance";

export async function destroyCustomer(data) {
  const response = await axiosInstance.post("/company/delete", data);

  if (response) return response.message;
}
