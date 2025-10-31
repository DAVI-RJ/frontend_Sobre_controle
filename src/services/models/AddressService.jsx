const AddressFields = [
  { name: "street", label: "Rua:", type: "text", required: true },
  { name: "number", label: "Numero:", type: "text"},
  { name: "neighborhood", label: "Bairro:", type: "text"},
  { name: "city", label: "Cidade:", type: "text", required: true },
  { name: "state", label: "Estado:", type: "text", required: true },
  { name: "zip", label: "CEP:", type: "number"}
]

export default AddressFields; 