'use strict';

// Selecionando o <select>
const lista = document.querySelector("#lista-de-musicas");

// Selecionando a tag <audio>
const reprodutor = document.querySelector("audio");

// Selecionando o <figure> e seus elementos
const figureCapa = document.querySelector("figure");
const imagemCapa = figureCapa.querySelector("img");
const tituloMusica = figureCapa.querySelector("figcaption");

/* Monitorando o evento de mudanças de opções na lista <select> */
lista.addEventListener("change", function() {

    /* Verificando se o figure está escondido */
    if(figureCapa.hasAttribute("hidden")){
        figureCapa.removeAttribute("hidden");
    }

    let musicaSelecionada = lista.options[lista.selectedIndex];
    console.log(musicaSelecionada);

    reprodutor.src = musicaSelecionada.value;

    /* Exibir o titulo da música no figcaption */
    tituloMusica.textContent = musicaSelecionada.textContent;

    /* Exibindo a capa no img */
    imagemCapa.src = musicaSelecionada.getAttribute("data-imagem");

    /* Reproduzindo a música somente se o valor de músicaSelecionada
    diferente de vazio. Usamos o operador !== (diferente) */
    if ( musicaSelecionada.value !== "" ) {
        reprodutor.play();
    }
});