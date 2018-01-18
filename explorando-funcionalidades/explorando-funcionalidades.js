"use strict";
exports.__esModule = true;
// Importa classe BoasVindas
var boas_vindas_1 = require("./boas-vindas");
// Comando úteis
// tsc nome-do-arquivo-typescript.ts (transpila typescript para javascript)
// node nome-do-arquivo-javascript.js (executa o javascript)
// Criando um mapa em typescript;
var cliente = {
    nome: 'Augusto',
    idade: 26,
    nascimento: '24/10/2018'
};
// Acessando o mapa 'cliente' e apresentando seus valores.
console.log("\nApresentando mapa 'cliente' (chave + valor):");
console.log("Nome: " + cliente.nome + " | Apresentando valor da forma convencional (concatenada)");
console.log("Idade: " + cliente.idade + " | Apresentando valor usando template string\nData de Nascimento: " + cliente.nascimento + " | Apresentando valor usando template string");
// Instanciando um objeto da classe BoasVindas
// e apresenta mensagem de boas vindas no console.
console.log("\n\nApresenta mensagem de boas vindas através de um objeto do tipo BoasVindas:");
var boasvindas = new boas_vindas_1.BoasVindas("Bem vindo ao 'Explorador de Funcionalidades Typescript'");
console.log(boasvindas.getMensagem());
// Criação de uma array tipada.
var arrayDeNumero = [1, 2, 3];
// Multiplica os valores internos da array
// apenas para mostrá-los no console, ou seja, 
// não atualiza a array com os novos valores.
// P.S.: Console utilizando a técnica de 'template string'.
console.log("\n\nMultiplica valores da array apenas para mostrar, mas n\u00E3o atualiza a array com esses novos valores:");
console.log(arrayDeNumero.map(function (x) { return x * 2; }));
// Multiplicação de todos os valores
// internos da array e atualização da mesma
// com os novos valores.
// Varre lista mostrando index e valor usando 'map'.
// P.S.: Console utilizando a técnica de 'template string'.
console.log("\n\nMultiplica valores da array e atualiza array com esses novos valores. Ap\u00F3s isso, varre os itens da array atualizada utilizando 'map':");
arrayDeNumero = arrayDeNumero.map(function (x) { return x * 2; });
arrayDeNumero.map(function (element, index) {
    console.log("arrayDeNumero[" + index + "] = " + element);
});
// Varre lista mostrando index e valor usando 'forEach'.
// P.S.: Console utilizando a técnica de 'template string'.
console.log("\n\nVarre itens da array atualizada utilizando 'forEach':");
arrayDeNumero.forEach(function (element, index) { return console.log("arrayDeNumero[" + index + "] = " + element); });
