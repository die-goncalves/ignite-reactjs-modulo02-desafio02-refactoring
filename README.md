<h1 align="center">
    <img alt="go-restaurant" title="go-restaurant" src="/assets/refactor.svg" width="300px" />
</h1>

<!-- TABLE OF CONTENTS -->
<h5 align="center"> 
<a href="#sobre">Sobre</a>
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<a href="#tecnologias">Tecnologias</a> 
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<a href="#roadmap">Roadmap</a> 
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<a href="#instalação">Instalação</a> 
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<a href="#visão-do-projeto">Visão do projeto</a>
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<a href="#agradecimento">Agradecimento</a> 
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<a href="#licença">Licença</a> 	
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<a href="#autor">Autor</a> 
</h5>

## Sobre
<h4>GoRestaurant é uma aplicação web que gerencia pratos de comida</h4>

A aplicação utilizava JavaScript e componentes em classes como pode ser visto neste [template](https://github.com/rocketseat-education/ignite-template-reactjs-refactoring-classes-ts.git), como desafio nos foi proposto migrar todos os arquivos JavaScript para TypeScript e transformar os componentes de classe para componentes de função.

## Tecnologias
- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [JSON Server](https://github.com/typicode/json-server)
- [Axios](https://github.com/axios/axios)
- [styled-components](https://styled-components.com/)

## Roadmap
- [x] Migrar de JavaScript para TypeScript
- [x] Migrar Class Components para Function Components

## Instalação
- ### **Pré-requisitos**
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador.
  - É **necessário** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
- ### **Próximo passo**
1. Faça um clone deste repositório:
```sh
  $ git clone https://github.com/die-goncalves/ignite-reactjs-modulo02-desafio02-refactoring
```
2. Instalar as depêndencias:
```sh
  # Entre no diretório do repositório clonado
  $ cd ignite-reactjs-modulo02-desafio02-refactoring
  # Instale as dependências do projeto.
  $ yarn #ou $ npm install
```
3. Executar a API simulada pelo JSON Server 
```sh
  # Execute o seguinte comando em uma instância do terminal
  $ yarn server #ou $ npm run server
  # O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```
Os dados da fake API podem ser encontrados em [server.json](server.json) na raiz do projeto.

Algumas rotas que podem ser acessadas:
```sh
http://localhost:3333/foods
http://localhost:3333/foods/1 ou http://localhost:3333/foods/?id=1
http://localhost:3333/foods/?available=true
```
Para mais informações acesse [JSON Server](https://github.com/typicode/json-server).

4. Executar a aplicação
```sh
  # Com o JSON Server rodando, execute o seguinte comando em outra instância do terminal
  $ yarn start #ou $ npm run start
  # A aplicação inciará na porta:3000 - acesse <http://localhost:3000>
```

## Visão do projeto
<img src="/assets/refactor.gif" alt="go-restaurant" width="100%" height="80%">

## Agradecimento
<table width="100%" align="center">
    <tr>
        <th>
            <a href="https://rocketseat.com.br/">
                <img width="150" height="150" src="https://avatars.githubusercontent.com/u/28929274?s=200&v=4">
                <br /><sub><b>Rocketseat</b></sub>
            </a>
        </th>
        <th>
            <img width="150" height="150" src="/assets/ignite-logo.svg">
            <br /><sub><b>Ignite</b></sub>
        </th>
        <th>
            <a href="https://github.com/diego3g">
                <img width="150" height="150" src="https://avatars.githubusercontent.com/u/2254731?s=400&u=4fcc8ca9672eeb41ea800271831b7c687bc17054&v=4">
                <br /><sub><b>diego3g (Diego Fernandes)</b></sub>
            </a>
        </th>
    </tr>
</table>

## Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Feito por Diego Gonçalves, contato:

[![Badge](https://img.shields.io/static/v1?label=Linkedin&message=Diego%20Gonçalves&color=208BEE&style=flat-square&logo=linkedin&link=https://www.linkedin.com/in/diego-goncalves1990)](https://www.linkedin.com/in/diego-goncalves1990)
[![Badge](https://img.shields.io/static/v1?label=Gmail&message=die.goncalves1990@gmail.com&color=EA5134&style=flat-square&logo=gmail&link=mailto:die.goncalves1990@gmail.com)](mailto:die.goncalves1990@gmail.com)
