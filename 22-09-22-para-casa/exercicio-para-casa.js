//Exercício para casa: Programa para retornar quantos pets cada pessoa tem
//for tradiconal contador
//if dentro(contador) e fora(retorno pets)

// deve retornar: Sou (nome) tenho (quantidade) (pets)
//detalhe o nome pet deve ser feito um if separado para caso a pessoa tenha 1 pet ou n tenha
//se tiver 1: Sou (nome) tenho (quantidade) (pet)
//se tiver mais de 1: Sou (nome) tenho (quantidade) (pets)
//se não tiver: Sou (nome) não tenho pets

//1. nome da pessoa
//2. quantidade de pets

const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Alane",
        pets: ["Betowen"],
    },
    {
        nome: "Luciana",
        pets: ["Ikki", "Eme"],
    },
    {
        nome: "Gabriela",
        pets: ["Vinicius", "Aitofel", "Taylor", "Apolo", "Nina", "Fiona", "Tonico", "Jerry", "Minimay", "Jove", "Pierre"],
    },
    {
        nome: "Leticia",
        pets: ["Pitty", "BillyBlack", "Gatila", "Tortuguinho"],
    },
    {
        nome: "Grazielle",
        pets: ["Maria", "Lupita"],
    },
    {
        nome: "Brizza",
        pets: ["Bibi"],
    },
]

let contador = 0

for (let contadorPets of usuarios) {
        if (contadorPets === usuarios.length) {
            contador++
        }
    }

let nomeUsuario = Object.values(usuarios[0])
let quantidadePets = Object.values(usuarios[0])

// let nomesDosPets = Object.values(usuarios[0]).forEach(function(cadaPet){
//     console.log(cadaPet)
// })

if(contador == [0]){
    console.log(`Sou ${nomeUsuario} e não tenho pets.`)
}else{
    console.log(`Sou ${nomeUsuario} e tenho ${quantidadePets.length} pets.`)

}