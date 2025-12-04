import { useEffect} from "react";
import { axiosInstance } from "../api/axiosInstance"
import { useAxiosErrorHandler } from "../../context/error/ErrorContext";

export function useAddressServices(){
  const {handleError} = useAxiosErrorHandler();

  const AddressService = ({setEstados}) => {
    useEffect(() => {
      fetch(import.meta.env.VITE_API_IBGE)
        .then(res => res.json())
        .then(data => setEstados(data))
        .catch(err => console.error('Erro ao buscar estados:', err));
    });
  }

  const createAddress = async (dataAddress) => {
    try{
      const responseAddress = await axiosInstance.post("/company/address", dataAddress);
      const addressId = responseAddress.data.id;

      return addressId;

    }catch(error){
      handleError(error)
    }
  }

  return { AddressService, createAddress };
}
