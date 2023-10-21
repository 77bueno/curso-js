"use strict";

/* Funções/Métodos de seleção de elementos no DOM 

- getElementByID() 
Seleciona UM elemento através do ID

- querySelector()
Seleciona UM elemento através de SELETORES (mesma lógica do css)

- querySelectorAll()
Seleciona VÁRIOS elementos através de SELETORES (mesma lógica do css)
*/

/* Exemplos de seleção do DOM */

// Exemplos 1: getElementById
const legenda = document.getElementById("legenda");
// console.log(legenda);

// Exemplos 2: querySelector
const titulo = document.querySelector("h1");

const sobreFront = document.querySelector("#sobre");

// console.log(titulo);
// console.log(sobreFront);


/* Mini Exercício */

const back = document.querySelector(".back");
const editores = document.querySelector("div h2");

console.log(back, editores);


/* Exemplo 3: querySelectorAll */
const subtitulos = document.querySelectorAll("h2");
console.log(subtitulos);
console.log(subtitulos[1]);

const varios = document.querySelectorAll("p, a");
console.log(varios);

/* Modificando elementos no DOM
(Conteúdo, mudança de tag, cores, criação de elementos) */

// Alterando o conteúdo
legenda.textContent = "DOM - Hierarquia Geral";

// Alterando com suporte à HTML
sobreFront.innerHTML = "<i>Front-End</i>";