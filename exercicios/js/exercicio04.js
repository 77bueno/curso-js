let btAzul = document.getElementById("btAzul");
let btLaranja = document.getElementById("btLaranja");
let btRosa = document.getElementById("btRosa");

console.log(btAzul, btLaranja, btRosa);

btAzul.addEventListener("click", functionAzul)
    function functionAzul(event){
        btAzul.innerHTML = "<h2>Simboliza criatividade, juventude e alegria.</h2>"
    }