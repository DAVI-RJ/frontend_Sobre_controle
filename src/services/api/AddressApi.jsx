import { useEffect} from "react";

const AddressService = ({setEstados}) => {
  useEffect(() => {
    fetch(import.meta.env.VITE_API_IBGE)
      .then(res => res.json())
      .then(data => setEstados(data))
      .catch(err => console.error('Erro ao buscar estados:', err));
  });
}

export default AddressService; 
