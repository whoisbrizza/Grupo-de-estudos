// Exercício 6: Calcular Taxa de Juros
// taxaDeJuros
// montante 
// capital
// numeroDePeriodos

let M = 90000; 
let C = 60000;
let n = 24 

i = (M / C) ** (1/ n) - 1
console.log((i*100).toFixed(2) + "%")

// Função:

// function calcularTaxaDeJuros(M, C, n){
//     let i = (M / C) ** (1/ n) - 1 
//     console.log((i * 100).toFixed(2) + "%")
// }
// calcularTaxaDeJuros(90000, 60000, 24)