"use strict"

//Exemplo 01 

//Selecionando elementos
const exemplo01 = document.getElementById("exemplo01")
const mensagem01 = document.getElementById("mensagem01")
const pagina = document.getElementById("pagina")
const titulo = document.getElementById("titulo")
const mensagem02 = document.getElementById("mensagem02")
const botaofechar = document.querySelector("#janela button")
const janela = document.querySelector("#janela")
const noturno = document.querySelector("#noturno")

//Detectando elemento por click
exemplo01.addEventListener("click", function(){
    mensagem01.innerHTML = "Beleza!"
    mensagem01.style.fontSize = "32px"
    pagina.style.fontFamily = "verdana"

   /*  exemplo01.addEventListener("click", function(){
        mensagem01.style.display = "none"
    }) */

    //removendo HTML
   // exemplo01.remove()

   //escondendo HTML
   //exemplo01.style.display = "none"
})

/* titulo.addEventListener("mouseover", function(){
    //exemplo01.style.display = "block"
   //mensagem01.textContent = "oi"
}) */

//Exemplo 02
/* document.addEventListener("mouseout", function(event){
    if (event.clientY < 0){
        //alert("Deseja sair?")
        //mensagem02.innerHTML = "Vai sair mesmo? 😒"  
        //mensagem02.classList.add("sair")
        janela.showModal();
    }
}) */
 


document.addEventListener("mouseout",verificaSaida)
function verificaSaida(event){
    if(event.clientY < 0){
        janela.showModal()
        document.removeEventListener("mouseout", verificaSaida)
    }
}

botaofechar.addEventListener("click", function(){
    janela.close()
})

//exemplo 3
noturno.addEventListener("click", bnoturno)
function bnoturno(event){
    // toggle verifica se a classe esta ativa
    pagina.classList.toggle("modoNoturno")

    if(pagina.classList.contains("modoNoturno")){
    noturno.textContent = "Desativar"

    } else {
    noturno.textContent = "Ativar"
    } 
}
