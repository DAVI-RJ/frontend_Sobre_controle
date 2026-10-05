import { createAddress } from "../api/createAddress";

export function useAddress() {
  const createAddressId = async (allData) => {
    const addressId = await createAddress(allData);
    
    if (addressId) {
      return (allData.customer.addressId = addressId);
    }
    return await createAddress(allData);
 };
  return { createAddressId };
}
