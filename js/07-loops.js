/* Principais comandos de repetição

- while     ENQUANTO
- do/while  FAÇA/ENQUANTO
- for       PARA

Obs.: Normalmente os comandos são controlados por meio de uma variável contadora.
*/

// Exemplo 1: While

let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}

// Exemplo 2: loop do/while alert

// let contador4 = 1;

// do {
//     console.log(contador4);
//     contador4++;
// } while (contador4 <= 5);

// Exemplo 3: loop for

for (let i = 1; i <= 10; i++) {
    console.log(i);
}