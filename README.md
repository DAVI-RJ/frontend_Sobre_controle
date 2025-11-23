# Sobre Controle

Pequeno sistema front-end em React para gerenciamento simples de produtos e cadastro multi-step.

## 🚀 Tecnologias Utilizadas
Aplicação construída com Vite + React. Possui páginas de Login, Registro (formulário em etapas) e uma Home com listagem e formulário de produtos.

## 🧱 Arquitetura e Boas Práticas
Designer atomic para desenvolvimento do projeto.

## 📌 Principais arquivos
- src/pages/home/Home.jsx — listagem e integração com useProducts
- src/hooks/ProductsHooks.jsx — lógica de estado e comunicações
- src/services/api/ApiConnection.jsx — axios/interceptors e auth
- src/models/ProductModel.jsx — definição do form

## 🛠️ Como Rodar o Projeto

### Pré-requisitos
- Node 18+ recomendado
- npm ou yarn


```bash
# Clone o repositório:
 git clone https://github.com/DAVI-RJ/frontend_Sobre_controle.git

# Instale as dependências
npm install #ou yarn install  

```

### Execução em desenvolvimento
```bash
npm run dev
```

## 📁 Estrutura do projeto
```         
  └── src/
    └── assets/
    |── componentes/  #(atoms → molecules → organisms → templates)
    |── config/
    |── hooks/
    |── models/
    ├── page/         
      └── home/ 
      |── login/
      └── register/
    ├── services/
    ├── utils/

```

## 🧪 Fluxos principais
- Login: formulário em [`src/pages/login/Login.jsx`](src/pages/login/Login.jsx) que usa o componente `Form`.
- Registro: fluxo multi-step em [`src/pages/register/Register.jsx`](src/pages/register/Register.jsx) composto por [`Step1`](src/Components/form/stepsRegister/Step1.jsx), [`Step2`](src/Components/form/stepsRegister/Step2.jsx) e [`Step3`](src/Components/form/stepsRegister/Step3.jsx).
- Home: alterna entre lista e formulário de produtos via [`SidebarComponent`](src/Components/siderbar/Sidebar.jsx).

## Observações
- O componente de input usa `react-hook-form` através de [`FormProvider`](src/Components/form/Form.jsx).
- Arquivos de estilo estão próximos aos componentes (CSS modules não usados atualmente).

## 📚 Aprendizados e Desafios