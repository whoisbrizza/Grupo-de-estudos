// Exercício 2: Dominó

// let ladoA = 3
// let ladoB = 1


// if (ladoA == ladoB) {
//     console.log("É bomba!");
// } else {
//     console.log("Não é bomba!")
// }

// Função:

// function pecaDeDomino(ladoA, ladoB){
//         if (ladoA == ladoB) {
//         console.log("É bomba!");
//     } else {
//         console.log("Não é bomba!")
//     }
// }
// pecaDeDomino(3, 2)

// Definindo as bombas:


function pecaDeDomino(ladoA, ladoB){
    if (ladoA == 0 && ladoB == 0){ 
    console.log("É bomba de branco!")
    } else if (ladoA == 1 && ladoB == 1){
    console.log("É bomba de ás!")
    } else if(ladoA == 2 && ladoB == 2){
        console.log("É bomba de duque!")
    }else if(ladoA == 3 && ladoB == 3){
        console.log("É bomba de terno!")
    }else if(ladoA == 4 && ladoB == 4){
        console.log("É bomba de quadra!")
    }else if(ladoA == 5 && ladoB == 5){
        console.log("É bomba de quina!")
    }else if(ladoA == 6 && ladoB == 6){
        console.log("É bomba de sena!")
    }else {
        console.log("Não é bomba!")
    }
}

pecaDeDomino(1, 1)