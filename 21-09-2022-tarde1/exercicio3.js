// Exercício 3: 

function classificandoCaracter(caracter){
    if(caracter === "A" || caracter === "E" || caracter === "I" || caracter === "O" || caracter === "U"){
        console.log("O caracter é vogal maiúscula.")
    }else if(caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u"){
        console.log("O caracter é vogal minúscula.")
    }else if(caracter >= 0 && caracter <= 9){
console.log("O caracter é número.")
    } else{
        console.log("O caracter é consoante.")
    }
}
classificandoCaracter(0)
classificandoCaracter("a")
classificandoCaracter("A")
classificandoCaracter("z")
classificandoCaracter("Z")