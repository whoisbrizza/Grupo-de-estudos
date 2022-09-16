// Exercício 2: Cálculo de Juros

/* let capital = 1000;
let tempo = 5;
let taxaDeJuros= 12.5;

// m = c * (1+ i ) ** t = 

let montante = capital * (1 + taxaDeJuros) ** tempo
console.log(montante)

Função */

function calculoMontante(capital, tempo, taxaDeJuros){
    let montante = capital * (1 + taxaDeJuros) ** tempo
    console.log(montante)
}
calculoMontante(1000,5, 12.5)