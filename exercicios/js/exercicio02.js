let pedido = {
    codigo: 2710,
    data: "23/09/2023",
    produtos: [
        "Monitor",
        "Mouse",
        "Teclado"
    ],
    preco: 5000,
    prazoDeEntrega: "27/09/2023"
};

let formatar = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    pedido.preco
);

console.log(`-----------------------------------------------------------
| O Sr(a) fez um pedido conosco na data: ${pedido.data}       |
| O Código do seu pedido é: ${pedido.codigo}                          |
| Sua sacola de compras ficou assim: ⬇                    | 
|  -   ${pedido.produtos[0]}                                            |
|  -   ${pedido.produtos[1]}                                              |
|  -   ${pedido.produtos[2]}                                            |
| O valor da sua compra ficou no total de: ${formatar}    | 
| O pedido será entregue em até 4 dias úteis (${pedido.prazoDeEntrega}) |
----------------------------------------------------------- ` 
);


  
