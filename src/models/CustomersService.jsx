const customersFildes = [
  { name: "Customer", label: "Nome do Cliente:", placeholder: "Digite o nome do cliente", type: "text", required: true },
  { name: "cnpj", label: "CNPJ:", placeholder: "Digite so número", type: "text", required: true },
  { name: "email", label: "E-mail:", placeholder: "empresa@exemplo.com", type: "email", required: true },
  { name: "Phone", label: "Telefone Cliente", placeholder: "Digite so número", type: "tel", required: true },
]

const customersModel = []

export { 
  customersModel as default,
  customersFildes
}