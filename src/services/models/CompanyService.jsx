const companyFields = [
  { name: "name", label: "Nome da Empresa:", type: "text", required: true },
  { name: "email", label: "E-mail:", type: "email", required: true },
  { name: "cnpj", label: "CNPJ:", type: "text", required: true },
  { name: "representative", label: "Nome do Representante", type: "text", required: true },
  { name: "phone", label: "Telefone", type: "telefone", maxlength: 15 ,required: true},
]

const companyModel = []

export { 
  companyModel as default,
  companyFields
}