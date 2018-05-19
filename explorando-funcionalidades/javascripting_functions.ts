
// Function Expression (ordem importa, pois a função está sendo passada para uma variável)
var testeInside = function (textInside) {
    return this.text + " " + textInside + " de testeInside.";
}




// Function Declaration (ordem não importa)
function declarationHere() {}






// Criação de objetos (contextos em que serão realizadas as chamadas para a function expression)
var object1 = {
    text: "contexto_object_1",
    testeInside: testeInside
};

var object2 = {
    text: "contexto_object_2",
    testeInside: testeInside
};
// Invoca método de dentro dos objetos (contextos) criados passando o parâmetro estabelecido.
console.log(object1.testeInside("'texto interno objeto 1'"));
console.log(object2.testeInside("'texto interno objeto 2'"));
// Invoca a função testeInside passando um contexto juntamente com o parâmetro estabelecido através de "call".
// O primeiro membro de call pode ser usado para indica o contexto em que será utilizada no momento de invocação da função.
console.log(testeInside.call({text: "opa"}, "teste"));







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