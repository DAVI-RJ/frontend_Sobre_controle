import React, { useEffect} from "react";

const AddressService = () => {
  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(res => res.json())
      .then(data => setEstados(data))
      .catch(err => console.error('Erro ao buscar estados:', err));
  }, []);
}

export default AddressService; 

console.log(AddressService())