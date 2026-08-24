import { axiosInstance } from "@/core/http/axiosInstance";
import log from "@/core/logger/logger";

export async function getProfileCompany() {
  try {
    const response = await axiosInstance.get("/company/profile");
    log.info(
      "Company profile loaded",
      { name: response?.data?.name },
      {
        feature: "header",
      }
    );
    return response.data.name;
  } catch (error) {
    log.info(error);
    throw error;
  }
}
