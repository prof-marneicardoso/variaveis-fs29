
// Variáveis em JS

/*
// VAR
var valorA = 5;
console.log(valorA);

if (1 == 1) {
    var valorA = "OK";
    console.log(valorA);
}

console.log(valorA);
// O "tipo" var tem o defeito de permitir que
// seja criada uma variável com o mesmo nome
// de uma variável qe já existe, sobrescrever
// a anterior.
*/

/*
// LET
let valorB = 5;
console.log(valorB);

if (1 == 1) {
    let valorB = "OK";
    console.log(valorB);
}

console.log(valorB);
*/

// CONST
let contador;

const valorC = "valorC";
// console.log(valorC);

// valorC = "Marnei";
// console.log(valorC);

// Quando devo usar LET e quando devo usar CONST?

// Exercício 7 (da lista): Escreva um algoritmo que
// receba 3 notas de um estudante. Calcule a média
// das notas e mostre na tela.

// 1. Declaração da Variáveis
let nota1;
let nota2;
let nota3;

// Mostra o tipo
console.log(typeof(nota1));

// 2. Atribuição de Valores (ENTRADA)
nota1 = 7;
nota2 = 6.3;
nota3 = 3;

// 3. Cálculos e Validações (PROCESSAMENTO)
const media = (nota1 + nota2 + nota3) / 3;

// 4 Mostrar o Resultado (SAÍDA)
console.log(media.toFixed(1));
// console.log(media);

/* TIPOS de VARIÁVEIS
    Inteiro     int     5  9  23
    Decimal     float   1.25    0.75
    Caractere   char    "m" "A" "@"
    Texto       string  "Eu sou o Marnei"
    Booleano    bool    true ou false
*/

const nome = "Marnei";
const nivel = "ótimo";

// Concatenação
// const teste = "Eu sou o " + nome + ", sou um " + nivel + " professor";

// Template Literal (Template String)
const teste = `Eu sou o ${nome}, sou um "${nivel}" professor`;

console.log(teste);
