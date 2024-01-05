<p align="center">
    <img src="https://raw.githubusercontent.com/lamenkazu/foodexplorer_frontend/main/src/assets/Brand.png" height="30" width="200" alt="Food Explorer" />
</p>

<p align="center"> Frontend de um E-commerce fictício para o desafio final do curso Explorer! 🚀</p>

<div align="center">

![Static Badge](https://img.shields.io/badge/Lib%20-%20React%20%2B%20Vite%20-%20%23065E7C)
![Static Badge](https://img.shields.io/badge/FetchWith%20-%20Axios%20-%20%23065E7C)
![Static Badge](https://img.shields.io/badge/Style%20-%20Styled%20Components-%20%23065E7C)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a7932004-3f7d-4c68-8e3f-9beb31a28fc0/deploy-status)](https://app.netlify.com/sites/foodexplorer-frontend-3cc695/deploys)

</div>

<h4 align="center"> 🚧 🚀 Em construção... 🚧 </h4>

# Deploy
Para visualizar o funcionamento do site você pode acessar o [link do Deploy.](https://foodexplorer-frontend-3cc695.netlify.app)

Em caso de problemas, **funciona melhor no Google Chrome!**

# Getting Started
Caso queira usar sua versão do código, basta abrir o terminal na pasta com o projeto e execute os comandos para instalação e execução da aplicação:
- npm i
- npm run dev

## Você pode acessar as funcionalidades de Admin através da conta abaixo:
email: 333@mail.com
senha: 123

# Sobre o Projeto
Bem-vindo! Abaixo, apresentamos uma visão geral do frontend deste projeto, desenvolvido como parte do desafio final do Explorer.
O frontend foi projetado para proporcionar uma experiência de usuário envolvente e intuitiva, seguindo o layout fornecido no Figma. O objetivo é criar telas que permitam a interação com os pratos do restaurante, garantindo uma navegação suave e agradável.

## Estrutura do Projeto
O código está organizado de maneira modular e seguindo as melhores práticas de desenvolvimento React. Componentes reutilizáveis foram implementados para facilitar a manutenção e expansão do sistema.

## Tecnologias Utilizadas
- **React:** O frontend foi construído utilizando o framework React, que oferece uma abordagem declarativa e eficiente para criar interfaces de usuário.
- **Figma e Assets:** O design do frontend segue as diretrizes fornecidas no Figma, com todos os recursos necessários disponíveis no pacote de Assets.
- **API Backend:** O frontend integra-se de forma eficiente com o backend, consumindo os dados necessários por meio dos endpoints da API.
- **Responsividade:** A interface do usuário é responsiva, seguindo o conceito Mobile First, garantindo uma experiência consistente em diferentes dispositivos.
- **Animações e Transições:** Foram implementadas animações e transições para aprimorar a experiência do usuário durante a navegação e interação com a aplicação.

## Funcionalidades Implementadas
- **Telas Principais:** Implementação das telas de login, página principal e página de detalhes do prato, conforme especificado no layout do Figma.
- **Interatividade:** Funcionalidades para visualização de pratos, busca por nome e ingredientes, e interação intuitiva com os pratos.
- **Upload de Imagens:** Suporte para upload de imagens durante o cadastro dos pratos, proporcionando uma experiência completa.
- **Layout Responsivo:** Adoção do conceito Mobile First, garantindo que a interface seja amigável em dispositivos móveis e desktop.
- **Animações:** Implementação de animações e transições para melhorar a usabilidade e a estética da aplicação.
- **Integração com Backend:** Conexão eficiente com a API do backend para o consumo de dados, garantindo consistência e atualização em tempo real.
- **Documentação Detalhada:** O README inclui uma documentação completa, com instruções claras sobre a execução do projeto e um link para deploy.

## Features
### Tela inicial do usuário
- [x]  *Mobile-first*
- [x]  Criar a tela de cadastro de um usuário:
    - [x]  Adicionar a logo de um usuário comum;
    - [x]  Criar o formulário de cadastro;
- [x]  Criar a tela de login de um usuário;

- [x]  Desktop

### Header da aplicação
- [x]  *Mobile-first*
- [x]  Criar menu hambúrguer funcional:
    - [x]  Única opção do menu: *Sair*
    - [x]  Criar e adiciona no menu o campo de busca;
- [x]  Adicionar ícone de pedidos;

- [x]  *Desktop*
  - [x]  Adicionar botão de pedidos;
  - [x]  Adicionar ícone para o usuário deslogar;

### Para um usuário admin:
- [x]  Adicionar opção *Novo prato* no menu *(mobile);*
- [x]  Substituir a logo pela logo do admin;
- [x]  Substituir botão de **Pedidos** por **Novo prato**

### Footer da aplicação
- [x]  *Mobile-first*
- [x]  Criar o Footer da aplicação;
    - [x]  Adicionar logo;
    - [x]  Adicionar texto;
    - [x]  Fixar footer no rodapé;

- [x]  Desktop

### Card de um prato
- [x]  *Mobile-first*
- [x]  Criar o card que engloba as informações do prato:
    - [x]  Adicionar ícone de favoritos;
    - [x]  Setar um tamanho fixo pra imagem;
    - [x]  Criar o título do prato;
    - [x]  Criar o preço do prato;
    - [x]  Criar a opção de quantidade do prato a incluir;
    - [x]  Criar o botão para incluir no carrinho;

- [x]  Desktop
    - [x]  Criar a descrição do prato;

### Para um usuário admin:

- [x]  Substituir o ícone de coração pelo ícone de editar;
- [x]  Esconder quantidade do prato;
- [x]  Esconder botão de incluir.

### Tela principal da aplicação
- [x]  *Mobile-first*
- [x]  Criar a seção com o banner do topo:
    - [x]  Adicionar imagem;
    - [x]  Adicionar background;
    - [x]  Adicionar texto;
- [x]  Criar categorias dos pratos;
- [ ]  Criar o carrossel dos pratos; (TO DO)

- [x]  Desktop

### Tela de criação de um prato
- [x]  *Mobile-first*
- [x]  Desktop

### Apenas para usuários admin:
- [x]  Adicionar opção de voltar para a tela anterior;
- [x]  Adicionar título da ação: Novo prato;
- [x]  Criar input para upload de imagem;
- [x]  Criar input para o nome do prato;
- [x]  Criar input para a categoria do prato;
- [x]  Criar input para adicionar os ingredientes;
- [x]  Criar input para adicionar o preço do prato;
- [x]  Criar input para descrição do prato;
- [x]  Criar botão para salvar os dados;

### Tela de visualização de um prato
- [x]  *Mobile-first*
- [x]  Adicionar opção de voltar para a página anterior;
- [x]  Carregar imagem do prato;
- [x]  Carregar nome do prato;
- [x]  Carregar descrição do prato;
- [x]  Carregar tags com os ingredientes;
- [x]  Adicionar quantidade do prato;
- [x]  Adicionar botão **Inserir**.

- [x]  Desktop

### Para um usuário admin:
- [x]  Esconder opção de quantidade do prato;
- [x]  Substituir texto do botão de **Inserir** por **Editar***;

### Tela de edição e exclusão de um prato - Apenas para usuários admin:
- [x]  *Mobile-first*
- [x]  Mesmos dados da tela de criação de um prato;
- [x]  Adicionar botão de Excluir;

- [x]  Desktop

### Tela de visualização dos pratos favoritos
- [x]  *Mobile-first*
- [x]  Carregar imagem do prato;
- [x]  Carregar nome do prato;
- [x]  Botão para remoção do prato dos favoritos;

- [x]  Desktop
