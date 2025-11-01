const customersFildes = [
  { name: "Customer", label: "Nome do Cliente:", type: "text", required: true },
  { name: "cnpj", label: "CNPJ:", type: "text", required: true },
  { name: "email", label: "E-mail:", type: "email", required: true },
  { name: "Phone", label: "Telefone Cliente", type: "telefone", required: true },
]

const customersModel = []

export { 
  customersModel as default,
  customersFildes
}