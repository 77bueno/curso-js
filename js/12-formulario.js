'use strict';

const formulario = document.querySelector('form');
const campoNome = formulario.querySelector('#nome');
const campoNota1 = formulario.querySelector('#nota1');
const campoNota2 = formulario.querySelector('#nota2');

// Selecionando a tabela e seus elementos
const tabela = formulario.querySelector('table');
const corpoTabela = tabela.querySelector('tbody');

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    // Verificando se a tabela está oculta,
    // ou seja, se ela tem o atributo hidden
    if(tabela.hasAttribute('hidden')) {
        /* Se tem, então removemos o tributo e com isso a tabela volta a aparecer */
        tabela.removeAttribute('hidden');
    }
});