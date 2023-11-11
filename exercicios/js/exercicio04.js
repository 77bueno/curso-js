let btAzul = document.getElementById("btAzul");
let btLaranja = document.getElementById("btLaranja");
let btRosa = document.getElementById("btRosa");
let titulo = document.getElementById("titulo");
let body = document.body;

console.log(btAzul, btLaranja, btRosa);

btAzul.addEventListener("click", functionAzul)
    function functionAzul(event){
        titulo.innerHTML = "Simboliza criatividade, juventude e alegria."
        titulo.style.color = "blue";
        body.style.transition = "background-color 1s";
        body.style.backgroundColor = "blue"
    }

btLaranja.addEventListener("click", functionLaranja)
    function functionLaranja(event){
        titulo.innerHTML = "Simboliza alegria, vitalidade, prosperidade e sucesso."
        titulo.style.color = "orange";
        body.style.transition = "background-color 1s";
        body.style.backgroundColor = "orange"
    }

btRosa.addEventListener("click", functionRosa)
    function functionRosa(event){
        titulo.innerHTML = "Simboliza romantismo, ternura e ingenuidade."
        titulo.style.color = "pink";
        body.style.transition = "background-color 1s";
        body.style.backgroundColor = "pink"
    }