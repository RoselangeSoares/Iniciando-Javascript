
let mensagem = 'O Herói tem o saldo de '
let resultado = subtrai(115, 20)

function subtrai(victory, defeat) {
    let resultado = victory - defeat

    if (resultado <= 10) {
        console.log(mensagem + resultado + ' e está no nivel Ferro')
    } else if (resultado >= 11 && resultado <= 20) {
        console.log(mensagem + resultado + ' e está no nivel Bronze')
    } else if (resultado >= 21 && resultado <= 50) {
        console.log(mensagem + resultado + ' e está no nivel Prata')
    } else if (resultado >= 51 && resultado <= 80) {
        console.log(mensagem + resultado + ' e está no nivel Ouro')
    } else if (resultado >= 81 && resultado <= 90) {
        console.log(mensagem + resultado + ' e está no nivel Diamante')
    } else if (resultado >= 91 && resultado <= 100) {
        console.log(mensagem + resultado + ' e está no nivel Lendário')
    } else {
        console.log(mensagem + resultado + ' e está no nivel Imortal')
    }
}