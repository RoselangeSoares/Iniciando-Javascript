// LAÇOS CONDICIONAIS

/*
Instalar Biblioteca de Arquivos
- Vá no terminal e digite: npm install readline-sync
- Para adicionar no geral digite: npm install -g readline-sync
*/

const input = require('readline-sync')
const numero_sorteado = 5
let numero = Number(input.question('Qual numero voce escolhe?'))

// console.log(numero, typeof numero)

// if (numero === numero_sorteado) {
//     console.log('Você Acertou')
// } else {
//     console.log('Você Errou')
// }

while (numero !== numero_sorteado) {
    console.log('Você errou o número, Tente novamente...')
    numero = Number(input.question('Qual numero voce escolhe?') )
}
console.log('você Acertou!')
