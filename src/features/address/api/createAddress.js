import { axiosInstance } from "@/core/http/axiosInstance";

export async function createAddress(data) {
  const response = await axiosInstance.post("/company/address", data);
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
