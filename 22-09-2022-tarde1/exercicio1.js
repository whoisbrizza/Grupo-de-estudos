// Exercício 1: Programa para retornar apenas os pares dentro de uma array
//push
//if
//for
//criar nova variavel para guardar

const original = [1, 4, 12, 21, 53, 88, 112]

let numeroPar = [];
let numeroImpar = [];

for (let numero of original){
    if (numero % 2 == 0) {
        numeroPar.push(numero)
     } else {
            numeroImpar.push(numero)
        }
    }
console.log(numeroPar)
console.log(numeroImpar)