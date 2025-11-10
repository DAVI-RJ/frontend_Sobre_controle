import { useState, useEffect } from "react";
import AddressService from "../../../services/api/AddressApi";

function SelectComponent({ name, id, onChange, value }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (typeof AddressService.getStates === "function") {
      AddressService.getStates().then(setOptions).catch(() => setOptions([]));
    } else if (Array.isArray(AddressService)) {
      setOptions(AddressService);
    }
  }, []);

  return (
    <select id={id} name={name} value={value} onChange={onChange}>
      <option value="">Selecione um estado</option>
      {options.map((opt) => (
        <option key={opt.code || opt} value={opt.code || opt}>
          {opt.name || opt}
        </option>
      ))}
    </select>
  );
}

export default SelectComponent;
