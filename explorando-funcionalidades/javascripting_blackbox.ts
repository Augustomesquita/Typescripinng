// Criando atributos públicos / privados de diferentes maneiras, 

// 1) Expondo método 'dobra' e encapsulando 'valor'.
// Eu só estou expondo no momento de retorno do objeto 
// da função principal. Fabric.
var criarPessoa = function() {
    var valor = 10;
    return {
        dobra : function () {
            return valor = valor * 2;
        }
    };
};

var pessoa1 = criarPessoa();
console.log('Blackbox por Fabric');
console.log(pessoa1.value); // undefined (privado)
console.log(pessoa1.dobra()); // 20 (público)



// 3) Realizando a mesma ação. Abordagem Constructor.
var ObjetoPessoa = function() {
    var valor = 10;
    this.dobraPeloConstructor = function() {
        return valor * 2;
    }
    this.dividePorDoisPeloConstructor = function() {
        var res = 0;
        if (valor != 0) {
            res = valor / 2
        }
        return res;
    }
};
var pessoaIIFE = new ObjetoPessoa();
console.log('Blackbox por Constructor');
console.log(pessoaIIFE.valor); // undefined (privado)
console.log(pessoaIIFE.dividePorDoisPeloConstructor()); // 5 (público)
console.log(pessoaIIFE.dobraPeloConstructor());  // 20 (público)



// 2) Utilizando Immediately Invoked Function Expression (IIFE)
// Neste conceito não é preciso realizar instância da função para
// usá-la. Eu só estou expondo no momento de retorno do objeto 
// da função principal. Abordagem Fabric.
var objetoPessoaIIFE = (function() {
    var valor = 10;
    var dobra = function() {
        return valor * 2;
    }
    var dividePorDois = function() {
        var res = 0;
        if (valor != 0) {
            res = valor / 2
        }
        return res;
    }
    return {
        dobra: dobra,
        dividePorDois: dividePorDois
    }
})()
console.log('Usando Immediately Invoked Function Expression (IIFE)');
console.log(objetoPessoaIIFE.dividePorDois()); // 5 (público)
console.log(objetoPessoaIIFE.dobra()); // 20 (público)
console.log(objetoPessoaIIFE.value); // undefined (privado)