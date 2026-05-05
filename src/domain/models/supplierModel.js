const supplierFildes = [
  { name: "supplier", label: "Nome do Fornecedor:", placeholder: "Nome do fornecedor", type: "text", required: true },
  { name: "cnpj", label: "CNPJ:", placeholder: "Digite so número", type: "text", required: true },
  { name: "email", label: "E-mail:", placeholder: "empresa@exemplo.com", type: "email", required: true },
  { name: "Phone", label: "Telefone Fornecedor", placeholder: "Digite so número", type: "tel", required: true },
]

const supplierModel = []; 

export { supplierModel as default, supplierFildes}