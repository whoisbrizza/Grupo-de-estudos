// Exercício 1: Programa para calcular e imprimir a soma de todos os números dentro de uma array

const numeros= [2,3,4,6]

// Resolução com método reduce:

// console.log(numeros.reduce((soma, numero) => soma + numero))

// Resolução com for:

let soma = 0;
for (let numero of numeros){
    soma = soma + numero
}
console.log(soma)
