// Comentário de uma linha. | Atalho: CRTL ; 
/* Comentário de bloco,
    de várias linhas. | Atalho: SHIFT ALT A */

// Dica: atalho log e enter
console.log("Exemplo Sintaxe Geral");

/* Variáveis e Constantes 
São espaços na memória RAM para
armazenamento de dados. */

// Variáveis (valor que pode mudar)
var aluno = "Victor"; // Método antigo
let professor = "Tiago"; // Método novo

// Constantes (um valor fixo, que não muda)
const escola = "Senac";

// Saída/Exibição de dados da memória
console.log(aluno);
console.log(professor);
console.log(escola);

console.log(professor, escola, aluno);

// Somente a declaração
let servico, prestador, unidade;

// Atribuição
servico = "Manutenção";
prestador = "Seu Madruga";
unidade = "Vila do Chaves";

console.log(prestador, servico);

/* Dados númericos: */
let ano = 2023; // inteiro
let preco = 1950.42; // decimal

/* Valores "quebrados" a casa decimal
é feita com . (ponto) e não virgula. */

/*
Nomes compostos 
O que ja vi antes, em aulas de js e php 
let curso de tecnologia; // ERRADO
let curso-de-tecnologia; // ERRADO
let curso_de_tecnologia; // certo
let cursoDeTecnologia; // certo e MAIS USADO
*/

/* Operadores matemáticas 
+ ADIÇÃO
- SUBTRAÇÃO
/ DIVISÃO
* MULTIPLICAÇÃO
*/ // fim do comentário
let valor1 = 10;
let valor2 = 5;

let soma = valor1 + valor2;
let subtracao = valor1 - valor2;
let multiplicacao = valor1 * valor2;
let divisao = valor1 / valor2;

console.log(valor1, valor2, soma, subtracao, multiplicacao, divisao);

/* Olá Victor, bem vindo ao Senac! */

/* Saída de Dados elaborada */

// CONCATENAÇÃO (utiliza o operador + para juntar dados)
console.log("Olá "+aluno+"😎, bem-vindo ao "+escola+"!");

// TEMPLATE LITERAL/STRING (utiliza crases ``)
console.log(`Olá ${aluno}😎, bem-vindo ao ${escola}!`);

/* Sobre Aspas (Simpes '' OU Duplas "") 
Aspas são usadas para textos/strings */
let estiloMusical_1 = "Rock n Roll"; 
let estiloMusical_2 = 'Rock "n" Roll'; 
/* let estiloMusical_3 = 'Rock 'n' Roll'; ERRADO */ 
let estiloMusical_4 = "Rock \'n\' Roll"; 

/* A barra invertida significa "ESCAPE", ou seja,
indicamos pro JS que aquele caractere com a barra
deve ser entendido apenas como um texto qualquer,
sem interferência com a linguagem de programação. */

/* Revisão sobre variáveis e constantes

let VARIÁVEL
const CONSTANTE */
let teste = 10;
// const teste = 10;
console.log(teste);

// sendo let tudo bem mudar!
// sendo const vai dar ruim!
teste = 20;
console.log(teste);

/*  
    const obriga a criação e atribuiução
    Portanto, a linha abaixo da erro.

    const x, y;
    x = 10;
    y = 5;
*/