import { axiosInstance } from "@/core/http/axiosInstance";
import { addressSchema } from "@/domain/schemas/addressSchema";

export async function createAddress(data) {
  const validatedData = addressSchema.parse(data);
  const response = await axiosInstance.post("/company/address", validatedData);
  console.log("Resposta da API:", response);
  return response;
}
/*
  const AddressService = ({ setEstados }) => {
    useEffect(() => {
      fetch(import.meta.env.VITE_API_IBGE)
        .then((res) => res.json())
        .then((data) => setEstados(data))
        .catch((err) => console.error("Erro ao buscar estados:", err));
    });
  };

*/
