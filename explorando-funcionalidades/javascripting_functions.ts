
// Testando conceito de CLOSURES
// Observa que a variável da 'message' passado na primeira função é usado dentro
// da função que está sendo declarado como retorno da primeira. Isso é possível
// pelo fato do javascript trabalhar com o conceito de CLOSURE.
var hello = function (message) { // definindo uma função ao estilo function expression (recebendo em variável).
 message += " moreOne";
 return function (extra) {
    return message += " moreTwo" + " moreExtra: " + extra;
 };
};
console.log(hello("helow")("???"));