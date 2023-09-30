/* Estruturas de controle Condicional 

    Comandos mais comuns:
    -if
    -else
    -elseif

    Operadores Relacionais:
    > maior que
    < menor que
    >= maior ou igual
    <= menor ou igual
    == igualdade
    != diferente
*/

// ----------------------------------------------------------------

// let numero = 12;

// if (numero > 10) {
//     document.write(`eita cabra bom, ai sim`);
// } else {
//     document.write(`seu número não passa de 10 amigo, lhe falta ódio!`);
// }

// ----------------------------------------------------------------

let aluno = "Bueno";

let nota1 = prompt(`Primeira nota: `);
let nota2 = prompt(`Segunda nota: `);

let n1 = parseFloat(nota1); 
let n2 = parseFloat(nota2);

let media = (n1 + n2) / 2;
let faltas = 9;

const mediaMinima = 7;
const limiteDeFaltas = 10;

let resultado

console.log(nota1);
console.log(nota2);
console.log(media);
console.log(resultado);

// ----------------------------------------------------------------

// if (media >= mediaMinima) {
//     resultado = "Aprovado(a)"
// } else {
//     resultado = "Reprovado(a)"
// }

// ----------------------------------------------------------------

if (media >= mediaMinima && faltas <= limiteDeFaltas) {
    resultado = "Aprovado(a)"
} else {
    resultado = "Reprovado(a)"
}

// console.log(resultado);

// ----------------------------------------------------------------

// Exemplo 3: condicional ENCADEADA (if, else if, else)

/* Desempenhos
- Média menor que 3? Péssimo
- Média menor que 5? Ruim
- Média menor que 7? Regular
- Média menor que 9? Bom
- Nenhuma das condições anteriores? Ótimo */

if(media < 3){
    console.log("Péssimo");
} else if (media < 5) {
    console.log("Ruim");
} else if (media < 7) {
    console.log("Regular");
} else if (media < 9){
    console.log("Bom");
} else {
    console.log("Ótimo");  
}