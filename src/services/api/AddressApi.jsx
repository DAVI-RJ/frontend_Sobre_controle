import React, { useEffect} from "react";

const AddressService = () => {
  useEffect(() => {
    fetch('REACT_APP_API_IBGE')
      .then(res => res.json())
      .then(data => setEstados(data))
      .catch(err => console.error('Erro ao buscar estados:', err));
  }, []);
}

export default AddressService; 
