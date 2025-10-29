const productModel = {
  name: "",
  price: 0,
  quantidade: 0
};

const initialProducts = [{}];

// Extrai as chaves do modelo de produto
const productFields = Object.keys(productModel);

// Regras de validação para cada campo
const validationRules = {
  name: {
    required: "Nome é obrigatório",
    minLength: {
      value: 3,
      message: "Mínimo de 3 caracteres"
    }
  },
  price: {
    required: "Preço é obrigatório",
    min: {
      value: 0,
      message: "Preço deve ser maior que zero"
    }
  },
  quantidade: {
    required: "Quantidade é obrigatória",
    min: {
      value: 0,
      message: "Quantidade deve ser maior que zero"
    }
  }
};

// Helper para determinar o tipo de input baseado no valor do campo
const getInputType = (value) => {
  if (typeof value === "number") return "number";
  return "text";
};

export {
  initialProducts as default,  // renomeado para mais clareza
  productModel,
  productFields,
  validationRules,
  getInputType
};