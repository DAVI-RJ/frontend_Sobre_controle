import { axiosInstance } from "@/core/http/axiosInstance";

export async function createCustomer(data) {
  try {
    const response = await axiosInstance.post("/company/customer", data);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
