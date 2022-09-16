// Exercício 3: Isenção de Impostos

function isencaoDeImpostos(aposentada, portadoraDeDoenca, totalDeRendimentos){
if(aposentada == true || portadoraDeDoenca == true ){
console.log("Isenta!")
} else if(totalDeRendimentos <= 2855970){
    console.log("Vaza Leão! Já tá difícil sem você!")
}else{
    console.log("Pega Leão!")
}
}

isencaoDeImpostos(true, false, 3000000000)