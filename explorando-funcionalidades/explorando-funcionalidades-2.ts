class MeuTipo {
    constructor(private valor: string) { }
}

// Recebo uma array como objeto.
let meuObjeto = { 1: 'a', 2: 'b', 3: 'c', 4: new MeuTipo('d'), 5: 'e', 6: new MeuTipo('f') };

/**
 * Por se tratar de uma array em forma de objeto, não consigo realiza interações 
 * sobre este elemento como foreach, filter, map, etc...
 * Para contornar este problema, podemos utilizar o elemento Object.keys.
 * Dessa forma conseguiremos iterar 
 * 
 * Também vamos aproveitar a deixa, e verificar qual o tipo de dado que estamos analisando.
 * Se for do tipo 'MeuTipo' iremos printar um "Opa! 'Valor' é uma variável do MeuTipo!" no console.
 */
Object.keys(meuObjeto).forEach((key) => {
    if (meuObjeto[key] instanceof MeuTipo) {
        console.log(`Opa! '${meuObjeto[key].valor}' é uma instância do MeuTipo!`);
    } else {
        console.log(meuObjeto[key]);
    }
})

// Bateria de testes que retorna a variável que está sendo verificada caso a mesma for truthy ou falsy.
// O javascript considera algo truthy e ou falsy quando analisa o valor através do contexto Booleano.
// Todos os valores são truthy a menos que eles sejam definidos como falsy (ou seja, exceto para false, 0, "", null, undefined, e NaN).

let res;

// Teste com array vazia.
const testeUm = []; // Verdadeiro segundo contexto Booleano.
res = testeUm || 'FALSO';
imprimeResultado('testeUm', res)

// Teste com string vazia.
const testeDois = ""; // Falso segundo contexto Booleano.
res = testeDois || 'FALSO'
imprimeResultado('testeDois', res)

// Teste com objeto vazio.
const testeTres = {}; // Verdadeiro segundo contexto Booleano.
res = testeTres || 'FALSO'
imprimeResultado('testeTres', res)

// Teste com zero.
const testeQuatro = 0; // Falso segundo contexto Booleano.
res = testeQuatro || 'FALSO'
imprimeResultado('testeQuatro', res)

// Teste com null.
const testeCinco = null; // Falso segundo contexto Booleano.
res = testeCinco || 'FALSO'
imprimeResultado('testeCinco', res)

const testeSeis = undefined; // Falso segundo contexto Booleano.
res = testeSeis || 'FALSO'
imprimeResultado('testeSeis', res)

const testeSete = NaN; // Falso segundo contexto Booleano.
res = testeSete || 'FALSO'
imprimeResultado('testeSete', res)

function imprimeResultado(nomeTeste, resultado: string) {
    if (!(resultado == 'FALSO') {
        resultado = 'VERDADEIRO';
    }
    console.log(`Resultado ${nomeTeste}: ${resultado}`)
}
