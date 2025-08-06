import React, {useState} from "react";
import InputComponent from "../../form/formComponentes/Input";

export default function ProductForm ({onAdd}){

  const [name, setName] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== ""){
      onAdd(name);
      setName("");
    }
    console.log("produto cadastro", name);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputComponent  
        name="name"
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit">Salvar</button>
    </form>
  )
}