
# Teste E2E Serasa

Projeto direcionado ao desadio técnico proposto pelo Serasa


## Clone

Clone este repositório para sua máquina local usando comando abaixo:

```
  $ git clone https://github.com/bia0a/Teste-End-to-end.git

  $ cd /{diretorio}/Teste-End-to-end
```
# Execução na interface
Acesse a raiz do repositório
```
 $ cd /{diretorio}/Teste-End-to-end
 ```
Execute comando para instalar as dependências
```
npm install
 ```
Execute comando para abrir a UI do cypress
```
npx cypress open
 ```

## Executando o arquivo cy.js

Ao iniciar a UI do cypress, uma tela de boas vindas aparecerá, com duas opções:
```
E2ETesting    |   Component Testing
 ```
É importante observar que o a opção de E2ETesting já deve estar como configurada, após isso a mesma deverá ser selecionada.

Assim, você será direcionado a uma página para a escolha de um dos três navegadores WEB(Chrome, Edge, Electron) disponíves. Quando selecionado, o navegador irá abrir e listar os E2E specs:

```
serasaTest.cy.js
```

Com um clique duplo o navegador deverá executar o teste.