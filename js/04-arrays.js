let alunos = ["Victor", "Phelipe", "Jhonatan", "Eliel"];

/* O acesso aos dados individuais do array, é feito através do nome do array e do ÍNDICE correspondente à posição do dado. */
console.log(alunos[2]);
console.log(alunos[0]);

// Mini-Exercício 

let artistas = [
    "Matue",
    "Teto",
    "Wiu",
    "Veigh",
    "Kyan"
];

// Template Literal/String
console.log(`Atualmente gosto mais do ${artistas[0]}, e não ouço o ${artistas[2]}.`);

// Concatenação
console.log("Ouço bastante o "+artistas[3]+", e não ouço o "+artistas[1]+".");

// Matrizes (Arrays com 2 ou mais dimensões)
let linguagens = [
    ["HTML", "CSS", "JS"],
    ["PHP", "ASP.Net", "Java", "Python"]
];

console.log(`${linguagens[0][1]} é para estilos.😎`);
console.log(linguagens[1][0]+" é para back-end.😎");