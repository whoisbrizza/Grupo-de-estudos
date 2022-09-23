// Exercício 2: Fazer um programa que conte quantas letras tem no array
//Deve ser impresso no console: Dentro da array existe 1 "A".

const letras = ["A", "a", "B", "C", "E", "e"];

let contador = 0;

for (let letra of letras) {
        if (letra === "A" || letra === "a") {
            contador++
        }
    }

if(contador === 0){
    console.log('Letra não encontrada!')
}else{
    console.log(`Letra encontrada: ${contador}`)
    console.log('Letra encontrada: ' + contador)
    console.log('Letra encontrada:',contador)
}