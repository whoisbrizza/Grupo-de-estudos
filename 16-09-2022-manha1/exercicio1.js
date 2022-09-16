// Exercício 1: Desconto de tênis

// const precoDoTenis = 12999;
// const meuDinheiro = 8000;

// const valorDoDesconto = precoDoTenis - meuDinheiro;

// const cupom = (100 * valorDoDesconto) / precoDoTenis

// console.log(` O valor do cupom deve ser ${cupom}%`)

// Função:

function calculoDesconto (precoDoTenis, meuDinheiro){
    let valorDoDesconto = precoDoTenis - meuDinheiro
    let cupom = (100 * valorDoDesconto) / precoDoTenis
    console.log(` O valor do cupom deve ser ${cupom.toFixed(2)}%`)
}
calculoDesconto(12999, 8000)