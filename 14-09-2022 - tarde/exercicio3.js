// Exercício 3: Imprimir uma lista de 0 a 50 em ordem crescente e dizer qual é par e ímpar

//for (let numero = 0; numero <= 50; numero ++){
  //  console.log(numero)
//}

for (let numero = 0; numero <= 50; numero ++){
    if(numero % 2 == 0){
        console.log(numero, "par")
    }else{
        console.log(numero, "impar")
    }
}