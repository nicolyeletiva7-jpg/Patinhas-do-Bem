# 🐾 Patinhas do Bem

## Sobre o projeto

O **Patinhas do Bem** é um projeto de front-end desenvolvido para uma ONG fictícia de proteção animal. O objetivo do site é apresentar animais disponíveis para adoção, divulgar projetos da organização e permitir o cadastro de pessoas interessadas em atuar como voluntárias.

## Funcionalidades

* Página inicial com apresentação da ONG.
* Cards com animais disponíveis para adoção.
* Página com os projetos da organização.
* Formulário de cadastro de voluntários.
* Validação dos campos do formulário.
* Máscaras para CPF, telefone e CEP.
* Menu responsivo com menu hambúrguer.
* Armazenamento dos dados utilizando `localStorage`.
* Interface adaptada para diferentes tamanhos de tela.
* Recursos de acessibilidade seguindo boas práticas da WCAG 2.1.

## Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* Vite

## Estrutura do projeto


patinhas-do-bem/
├── css/
│   └── style.css
├── html/
│   ├── index.html
│   ├── projeto.html
│   └── cadastro.html
├── img/
├── js/
│   ├── main.js
│   ├── menu.js
│   ├── animais.js
│   ├── mascaras.js
│   ├── storage.js
│   └── validacao.js
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md


## Instalação e execução

Para executar o projeto localmente, é necessário clonar ou baixar o repositório e abri-lo no Visual Studio Code.

Depois, no terminal, execute:

npm install


Para iniciar o servidor de desenvolvimento:


npm run dev


Para gerar a versão de produção:

npm run build


Também é possível testar a versão de produção utilizando:


npm run preview


## Acessibilidade

O projeto utiliza estrutura semântica com elementos como `header`, `nav`, `main`, `section`, `article` e `footer`. Também foram utilizados textos alternativos nas imagens, atributos WAI-ARIA no menu, organização adequada dos campos do formulário e destaque visual para navegação por teclado.

## Versionamento

O projeto utiliza Git e GitHub para controle de versão. Foram utilizadas as branches `main`, `develop` e `feature/` para organizar o desenvolvimento. As mensagens de commit seguem uma estrutura baseada no Conventional Commits.

## Build e otimização

O projeto utiliza Vite para gerar a versão de produção. O processo de build realiza a otimização e minificação dos arquivos, contribuindo para reduzir o tamanho dos recursos e melhorar o carregamento da aplicação.

Durante a configuração do build, também foram ajustados os caminhos dos módulos JavaScript e das imagens para garantir que os recursos continuassem funcionando corretamente na versão de produção.

## Deploy

O projeto será publicado utilizando o GitHub Pages, tendo o repositório do GitHub como fonte da versão publicada.

Após a publicação, serão realizados testes para verificar o funcionamento das páginas, links, imagens, estilos e funcionalidades JavaScript.
