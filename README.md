# Sobre Controle

## Introduction

Um aplicação fullstacker com o front-end em React, com formulários de cadastros multi-step, com
layout complexos e regra de negocios bem definidas, o projeto abrange, conceitos claros de
reutilização de componentes, escabilidade, segurança. Possui conceitos classicos, porém modulação
atuais.

## 🚀 Tecnologias Utilizadas

Índice:

- framework, lib usado. com o topicos:

💻 Visão geral do aplicativo

⚙️ [Padrões do Projeto](./docs/designer-pattener.md);

🗄️ [Estrutura do Projeto](./docs/project-infro.md); 

🧱 Componentes e Estilo

📡 Camada de API

Fluxos principais

🗃️ Gestão Estadual

🧪 Testando

⚠️ [Tratamento de erros](./docs/error-handling-guide.md)

🔐 [Segurança](./docs/security.md);

🌐 Implantação

📚 Aprendizados e Desafios

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

- Login: formulário em [`src/pages/login/Login.jsx`](src/pages/login/Login.jsx) que usa o componente
  `Form`.
- Registro: fluxo multi-step em [`src/pages/register/Register.jsx`](src/pages/register/Register.jsx)
  composto por [`Step1`](src/Components/form/stepsRegister/Step1.jsx),
  [`Step2`](src/Components/form/stepsRegister/Step2.jsx) e
  [`Step3`](src/Components/form/stepsRegister/Step3.jsx).
- Home: alterna entre lista e formulário de produtos via
  [`SidebarComponent`](src/Components/siderbar/Sidebar.jsx).

## Licença
