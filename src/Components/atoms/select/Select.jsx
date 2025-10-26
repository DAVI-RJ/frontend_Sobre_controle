import React, { useState } from "react";
import statesList from "../../../context/statesList";

function SelectComponent() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleChange}>
      <option value="">Selecione um estado</option>
      {statesList.map((estado) => (
        <option key={estado.id} value={estado.uf}>
          {estado.uf}
        </option>
      ))}
    </select>
  );
}

export default SelectComponent;