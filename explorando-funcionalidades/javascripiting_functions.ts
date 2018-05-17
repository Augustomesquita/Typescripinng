
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