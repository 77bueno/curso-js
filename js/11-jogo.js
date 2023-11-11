'use strict';

const pagina = document.querySelector('body');
const formulario = document.querySelector('form');
const campoPalpite = document.querySelector("#palpite");
const resultado = document.querySelector('#resultado');
const imagem = document.querySelector('#imagem');
const audio = document.querySelector('#audio');
const faustao = "faustao.gif";
const miseravi = "miseravi.gif";
const miseraviAudio = "audios/acertou-mizeravijk.mp3";
const faustaoAudio = "audios/faustao-errou.mp3";


/* Gerar valores aleatórios */

/* Usamos Math,random() * 11 para gerar valores entre 0 a 10, e passamos
o valor para o parseInt para descartar a parte "quebrada" do número, mantendo
apenas o valor inteiro */
let numeroAleatorio = parseInt(Math.random() * 11);
console.log(numeroAleatorio);

/* Detectando o acionamento do formulário
para capturar e analisar o palpite */
formulario.addEventListener("submit", function(event){
    /* Anulando o comportamento padrão do evento */
    event.preventDefault();
    
    // Capturando o palpite (valor do campo)
    let palpite = parseInt(campoPalpite.value);

    console.log(palpite);

    // Comparando o palpite com o numero aleatorio do computador
    if ( palpite === numeroAleatorio ) {
        resultado.textContent = "Acertou miserávi! 😎";
        resultado.style.color = "blue";
        pagina.style.backgroundColor = "lightblue";
        imagem.src = miseravi;
        audio.src = miseraviAudio;
        resultado.style.animation = "heartBeat 3s infinite";
    } else {
        resultado.textContent = "Erroou mané! 😢";
        resultado.style.color = "red";
        pagina.style.backgroundColor = "salmon";
        imagem.src = faustao;
        audio.src = faustaoAudio;
        resultado.style.animation = "shakeX 3s infinite";
    }
});