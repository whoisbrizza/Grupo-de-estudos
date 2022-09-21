// Exercício 2: Transformar nota em conceito

function notaEmConceito(nota){
    if(nota >= 9){
        console.log("Conceito da nota: A.")
    }else if(nota >= 8){
        console.log("Conceito da nota: B.")
    }else if(nota >= 6){
        console.log("Conceito da nota: C.")
    }else if(nota >= 4){
        console.log("Conceito da nota: D.")
    }else{
        console.log("Conceito da nota: E.")
    }
}

notaEmConceito(3)
notaEmConceito(4)
notaEmConceito(6)
notaEmConceito(8)
notaEmConceito(9)
notaEmConceito(10)
notaEmConceito(7.9)