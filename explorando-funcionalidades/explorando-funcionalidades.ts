// Importa classe BoasVindas
import { BoasVindas } from './boas-vindas';

// Comando úteis
// tsc nome-do-arquivo-typescript.ts (transpila typescript para javascript)
// node nome-do-arquivo-javascript.js (executa o javascript)

// Criando um mapa em typescript;
let cliente = {
    nome: 'Augusto',
    idade: 26,
    nascimento: '24/10/2018'
}

// Acessando o mapa 'cliente' e apresentando seus valores.
console.log("\nApresentando mapa 'cliente' (chave + valor):")
console.log("Nome: " + cliente.nome + " | Apresentando valor da forma convencional (concatenada)");
console.log(`Idade: ${cliente.idade} | Apresentando valor usando template literals\nData de Nascimento: ${cliente.nascimento} | Apresentando valor usando template literals`)

// Instanciando um objeto da classe BoasVindas
// e apresenta mensagem de boas vindas no console.
console.log("\n\nApresenta mensagem de boas vindas através de um objeto do tipo BoasVindas:")
let boasvindas: BoasVindas = new BoasVindas("Bem vindo ao 'Explorador de Funcionalidades Typescript'")
console.log(boasvindas.getMensagem())

// Criação de uma array tipada.
let arrayDeNumero: number[] = [1, 2, 3]

// Multiplica os valores internos da array
// apenas para mostrá-los no console, ou seja, 
// não atualiza a array com os novos valores.
// P.S.: Console utilizando a técnica de 'template literals'.
console.log(`\n\nMultiplica valores da array apenas para mostrar, mas não atualiza a array com esses novos valores:`)
console.log(arrayDeNumero.map((x) => x * 2))

// Multiplicação de todos os valores
// internos da array e atualização da mesma
// com os novos valores.
// Varre lista mostrando index e valor usando 'map'.
// P.S.: Console utilizando a técnica de 'template literals'.
console.log(`\n\nMultiplica valores da array e atualiza array com esses novos valores. Após isso, varre os itens da array atualizada utilizando 'map':`)
arrayDeNumero = arrayDeNumero.map((x) => x * 2)
arrayDeNumero.map((element, index) => {
    console.log("arrayDeNumero[" + index + "] = " + element)
})

// Varre lista mostrando index e valor usando 'forEach'.
// P.S.: Console utilizando a técnica de 'template literals'.
console.log(`\n\nVarre itens da array atualizada utilizando 'forEach':`)
arrayDeNumero.forEach((element, index) => console.log("arrayDeNumero[" + index + "] = " + element));