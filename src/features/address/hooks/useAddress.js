import { createAddress } from "../api/createAddress";
import log from "@/core/logger/logger";

export function useAddress() {
  const createAddressId = async (allData) => {
    const addressId = await createAddress(allData);
    log.info("endereço: ", addressId);
    if (addressId) {
      return (allData.customer.addressId = addressId);
    }
  };
  return { createAddressId };
}
