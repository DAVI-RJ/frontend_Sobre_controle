import React, { useState } from "react";
import AddressService from "../../../services/api/AddressApi";

function SelectComponent() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div value={selectedOption} onChange={handleChange}>
      <option value="">Selecione um estado</option>
    </div>
  );
}

export default SelectComponent;