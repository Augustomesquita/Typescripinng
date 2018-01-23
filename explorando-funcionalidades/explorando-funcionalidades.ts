// Importa classe BoasVindas
import { BoasVindas } from './boas-vindas';

// Comando úteis
// tsc nome-do-arquivo-typescript.ts (transpila typescript para javascript)
// node nome-do-arquivo-javascript.js (executa o javascript)

// Testando map vs forEach
let listBoasVindas:BoasVindas[] = [
    new BoasVindas("Augusto"),
    new BoasVindas("Fran"),
    new BoasVindas("João"),
    new BoasVindas("Mariana"),
    new BoasVindas("André") 
]

console.log("Lista original:")
listBoasVindas.forEach(s => console.log(s.getMensagem()))

// Map é usado quando queremos montar uma nova lista a partir das operações realizadas.
// O forEach não possui essa capacidade de retorno (ele é um void)
let stringListBoasVindas:string[] = listBoasVindas.filter(s => s.getMensagem().includes('A')).map(s => s.getMensagem());

console.log("\n\nLista de 'string' gerada a partir da lista de objetos 'BoasVindas'")
console.log("Utilizando map e filtragem por nomes iniciados com 'A':")
stringListBoasVindas.forEach(s => console.log(s))

// // Criando um objeto em typescript;
let cliente = {
    nome: 'Augusto',
    idade: 26,
    nascimento: '24/10/2018'
}

// Acessando o mapa 'cliente' e apresentando seus valores.
console.log("\n\nApresentando mapa 'cliente' (chave + valor):")
console.log("Nome: " + cliente.nome + " | Apresentando valor da forma convencional (concatenada)");
console.log(`Idade: ${cliente.idade} | Apresentando valor usando template literals\nData de Nascimento: ${cliente.nascimento} | Apresentando valor usando template literals`)


// Criação de uma array tipada.
let arrayDeNumero: number[] = [1, 2, 3]

// Multiplica os valores internos da array
// apenas para mostrá-los no console, ou seja, 
// não atualiza a array com os novos valores.
// P.S.: Console utilizando a técnica de 'template literals'.
console.log(`\n\nMultiplica valores da array apenas para mostrar, mas não atualiza a`)
console.log(`array com esses novos valores (utiliza forEach para este efeito):`)
arrayDeNumero.forEach((x, index) => console.log('Resultado: ' + x * 2 + ', posição no vetor[' + index + ']'))

// Varre array original de números.
// P.S.: Console utilizando a técnica de 'template literals'.
console.log(`\n\nVarre itens da array original de números:`)
arrayDeNumero.forEach((element, index) => console.log("arrayDeNumero[" + index + "] = " + element));

// Multiplicação de todos os valores
// internos da array e atualização da mesma
// com os novos valores.
// Varre lista mostrando index e valor usando 'map'.
// P.S.: Console utilizando a técnica de 'template literals'.
console.log(`\n\nMultiplica valores da array original, gerando uma nova array com esses novos valores a partir do uso de 'map'`)
console.log(`Após isso, varre os itens da nova array gerada utilizando 'forEach':`)
let novaArrayDeNumero: number[] = arrayDeNumero.map((x) => x * 2)
novaArrayDeNumero.forEach((element, index) => console.log("novaArrayDeNumero[" + index + "] = " + element))