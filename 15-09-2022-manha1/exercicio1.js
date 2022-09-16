// Imprimir lista de 0 a 50, separando pares e ímpares usando push:

let numeroPar = [];
let numeroImpar = []

for(let numero = 0; numero <= 50; numero ++){
    if (numero % 2 == 0){
        numeroPar.push(numero)
    }else {
        numeroImpar.push(numero)
    }
}
console.table(numeroPar)
console.table(numeroImpar)
