// Exercício 1: Pedra, Papel, Tesoura:

// pedra ganha da tesoura
// tesoura ganha do papel
// papel ganha da pedra

let jogador1 = "papel"
let jogador2 = "papel"

if (jogador1 === "pedra" && jogador2 === "papel" || jogador2 === "pedra" && jogador1 === "papel") {
    console.log('Papel ganhou!');
} else if (jogador1 === "pedra" && jogador2 === "tesoura" || jogador2 === "pedra" && jogador1 === "tesoura") {
    console.log('Pedra ganhou!');
} else if (jogador1 === "pedra" && jogador2 === "pedra" || jogador2 === "pedra" && jogador1 === "pedra") {
    console.log('Deu empate!');
} else if (jogador1 === "tesoura" && jogador2 === "papel" || jogador2 === "tesoura" && jogador1 === "papel") {
    console.log('Tesoura ganhou!');
} else if (jogador1 === "tesoura" && jogador2 === "tesoura" || jogador2 === "tesoura" && jogador1 === "tesoura") {
    console.log('Deu empate!');
} else {
    console.log('Deu empate!');
}
