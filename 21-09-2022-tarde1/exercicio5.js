// Exercício 5: Nome para exibição

// const primeiroNome = "Mario";
// const sobrenome = "";
// const apelido = "";

function exibirNome(primeiroNome, sobrenome, apelido){
    if(!primeiroNome){
        console.log("Preencha seu nome.")
    }else{
        console.log(`${primeiroNome} ${sobrenome} tem apelido: ${apelido}`)
    }
}

exibirNome("", "Santana", "Natxy")
exibirNome("Brizza", "Santana", "Natxy")