import { axiosInstance } from "@/core/http/axiosInstance";
import log from "@/core/logger/logger";

export async function createAddress(data) {
  const response = await axiosInstance.post("/company/address", data);
  log.info("Resposta da API:", response);
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
