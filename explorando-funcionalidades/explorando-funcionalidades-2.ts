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


