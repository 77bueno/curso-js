// Exemplo 01: Manipulação do DOM

// Função jQuery = $()

// document.querySelector
const titulo = $("h1");
const subtitulo = $("h2");

console.log(titulo);
console.log(subtitulo);

// Modificando elementos
//titulo.text("Bem-vindo jQuery!");
titulo.html("<i>Bem-vindo jQuery!</i>");

// Acessando determinados elementos selecionados 
// eq(índice) para acessar o elemento
console.log($(subtitulo).eq(0).text());

const sub1 = $(subtitulo).eq(0);
const sub2 = $(subtitulo).eq(1);

// Aplicando CSS inline
sub1.css("color", "red");
sub2.css("text-transform", "uppercase");

titulo.css({
    "color" : "purple",
    "text-align" : "center",
    "font-family" : "Geneva"
});

// Aplicando classe a um elemento
const classicRock = $("h3");

/* ------------ */

/* Exemplo 2: DOM e Evento */
const pagina = $("body");
const formulario = $("form");
const nome = $("#nome");
const tema = $("#tema");

// Manipular Evento
formulario.on("submit", function(event){
    event.preventDefault();

    // Capturando os dados 
    let usuario = nome.val();
    let cor = tema.val();
    let textoDaCor = tema.find("option:selected").text();

    // Aplicando a cor na página
    pagina.css("background-color", cor)

    // Personalizando o titulo
    titulo
    .hide()
    .html(`Olá <b>${usuario}</b>, você escolhou ${textoDaCor}`)
    .fadeIn(3500)
});
