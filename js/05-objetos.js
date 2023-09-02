let livro = {
    titulo: "Harry Potter",
    ano: 1997,
    volumes: 8,
    autor: "J. K. Rowling"
};

// Meu livro preferido é: Harry Potter
console.log("Meu livro preferido é: "+livro.titulo);
console.log(`O ano é ${livro.ano}.`);


// Exemplo 2: objeto contendo array e outro objeto
let cliente = {
    nome: "Frederico",
    apelido: "Kiko",
    idade: 22,
    telefones: ["11-2233-4455","11-94002-8922"],
    medidas: {
        peso: 75,
        altura: 1.79
    }
};

console.log( cliente.nome );
console.log( cliente.idade + " anos." );

// Acessando uma propriedade que também é array
console.log(cliente.telefones[1]);

// Acessando uma propriedade que também é um objeto
console.log( cliente.medidas.altura );