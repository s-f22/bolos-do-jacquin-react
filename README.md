# 🧁 Bolos do Jacquin - Frontend

Projeto modelo desenvolvido para os alunos do curso **CO>DE VW/Pe. Léo**, com o objetivo de demonstrar a construção de uma aplicação **React com TypeScript**, focada na criação de um **catálogo de produtos com upload de imagens**.

A proposta é simular uma vitrine digital de bolos chamada **Bolos do Jacquin**, com funcionalidades básicas de cadastro e visualização de produtos, utilizando uma API fake com suporte a upload de imagens.

---

## 📚 Objetivo Educacional

Este projeto serve como base para que os alunos possam:

- Compreender a estrutura de um projeto React com TypeScript;
- Integrar o frontend com uma API REST simulada;
- Trabalhar com rotas, componentes e serviços;
- Aprender sobre manipulação de formulários e upload de arquivos;

---

## 🧰 Tecnologias Utilizadas

### 🔵 Frontend

- **React 19** + **TypeScript**
- **Vite** (ferramenta de build e desenvolvimento)
- **React Router DOM v7**
- **Axios** (requisições HTTP)

### 🟠 API Fake (apenas para uploads)

- **Express**
- **json-server**
- **multer** (upload de imagens)
- **swagger-ui-express** (documentação da API)

---

## 📁 Estrutura do Projeto
```bash
.
├── api/ # API fake com upload de arquivos
└── src/ # Código-fonte do frontend React
  ├── pages/ # Páginas principais (Home, Cadastro, Produtos)
  ├── components/ # Componentes reutilizáveis (Header, Footer)
  ├── services/ # Consumo da API (axios)
  ├── assets/ # Imagens e ícones
  └── types/ # Tipagens TypeScript
```
---

## ▶️ Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Git instalado
- Terminal (VS Code recomendado)

---

### 1. Clone o repositório

```bash
git clone https://github.com/s-f22/bolos-do-jacquin-react.git
cd bolos-do-jacquin-react

2. Instale as dependências
🔹 Frontend
npm install

🔸 API
cd api
npm install

3. Inicie a API
cd api
npm start

A API estará disponível em: http://localhost:3000
Documentação Swagger: http://localhost:3000/docs

4. Inicie o Frontend
Em outro terminal, na raiz do projeto:

npm run dev

A aplicação React estará em: http://localhost:5173

✨ Funcionalidades

📋 Listagem de produtos (bolos)

➕ Cadastro de novos produtos

🖼️ Upload de imagem para cada produto

🔄 Integração com API simulada (json-server)

📑 Documentação da API via Swagger

📌 Dicas para Alunos

Use este projeto como modelo base para criar o seu próprio.

Explore os arquivos dentro de src/pages e src/services para entender como as páginas se comunicam com a API.

Personalize com seus próprios produtos, imagens e estilos!

👨‍🏫 Créditos

Projeto desenvolvido como parte do conteúdo didático do curso CO>DE VW/Pe. Léo.