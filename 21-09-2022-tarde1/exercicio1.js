// Exercício 1: Montanha Russa

//Acesso negado:
// menores de 12 anos
//maiores de 65 anos
//portador de patologia cardiaca
//menores de 150m de altura

//acesso permitido
//demais pessoas
//valor para retornar:
//10 reais : se for estudante ou menor de 18 anos
//20 reais: o restante

function montanhaRussa(idade, altura, portadorDoenca, estudante){
    if(idade < 12 || idade > 65 || portadorDoenca === true || altura < 150){
        console.log("ACESSO NEGADO")
    }else if(estudante === true || idade < 18){
        console.log("Acesso permitido! Valor: R$10,00")
    }else {
        console.log("Acesso permitido! Valor: R$20 reais.")
    }
}

//    montanhaRussa(29, 150, false, true)
//    montanhaRussa(29, 150, true, true)
// montanhaRussa(15, 150, false, false)
montanhaRussa(19, 150, false, false)