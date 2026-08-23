import { createAddress } from "../api/createAddress";

export function useAddress() {
  const createAddressId = async (allData) => {
    const addressId = await createAddress(allData);
    console.log("endereço: ", addressId);
    if (addressId) {
      allData.customer.addressId = addressId;
      return addressId;
    }
  };
  return { createAddressId };
}
