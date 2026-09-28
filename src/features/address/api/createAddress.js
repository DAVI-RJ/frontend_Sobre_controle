import { axiosInstance } from "@/core/http/axiosInstance";
import log from "@/core/logger/logger";

export async function createAddress(data) {
  const response = await axiosInstance.post("/company/address", data);
<<<<<<< HEAD
  log.info("Resposta da API:", response);
=======
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  console.log("Resposta da API:", response);
>>>>>>> feature/address
  return response;
=======
=======
  log.info("Resposta da API:", response);

>>>>>>> Stashed changes
  log.info("Resposta da API:", response.data);
  return response.data;
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
