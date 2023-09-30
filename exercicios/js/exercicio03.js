// Exercicio 

let salario = 1200;
let novoSalario;

if (salario < 1500) {
    novoSalario = salario * 1.15;
} else if (salario <= 3000) {
    novoSalario = salario * 1.10;
} else {
    novoSalario = salario * 1.05;
}

console.log(`Seu antigo salario era de ${salario}, e foi reajustado para ${novoSalario}! 😎`);