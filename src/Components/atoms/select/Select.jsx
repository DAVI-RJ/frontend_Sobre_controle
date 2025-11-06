import React, { useState } from "react";
import AddressService from "../../../services/api/AddressApi";

function SelectComponent() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleChange}>
      <option value="">Selecione um estado</option>
      
    </select>
  );
}

export default SelectComponent;