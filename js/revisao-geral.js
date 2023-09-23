// Variável 
let clube = "Corinthians";

// Constante
const estado = "SP";

// Saída de dados para testes 
console.log(clube);
console.log(estado);

// Concatenação
console.log("O "+clube+" é do estado de "+estado);

// Template String/Literal (moderna)
console.log(`O ${clube} é do estado de ${estado}`);  

// Janela de Diálogo
// let nome = prompt("Fala meu parceiro");
// console.log("Bem vindo(a) "+nome);

// Arrays (listas de dados INDEXADOS)
let comidas = [
    "Arroz",
    "Feijão",
    "Batata"
];

// Adoro Paçoca e Pizza
console.log(`Adoro ${comidas[0]} e ${comidas[2]}!`);

// Objetos (listas de dados NÃO INDEXADOS)
// Os dados são formados por propriedades com nome/valor
let aluno = {
    nome: "Victor",
    sobrenome: "Bueno",
    idade: 16
};

console.log(`${aluno.nome} tem ${aluno.idade} anos.`);