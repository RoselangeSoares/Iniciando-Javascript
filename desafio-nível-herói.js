
// Clasificador de Nível de Herói.
let heroi = 'Vaca_Goiaba'
let mensagem = `O Herói de nome ${heroi} está no nível `

// De acordo com a XP escolhida o Herói receberá o seu nível.
let XP = 5452500

if (XP <= 1000) {
    console.log(mensagem + 'Ferro.')
} else if (XP >= 1001 && XP <= 2000) {
    console.log(mensagem + 'Bronze.')
} else if (XP >= 2001 && XP <= 3000) {
    console.log(mensagem + 'Prata.')
} else if (XP >= 3001 && XP <= 4000) {
    console.log(mensagem + 'Ouro.')
} else if (XP >= 4001 && XP <= 5200) {
    console.log(mensagem + 'Platina.')
} else if (XP >= 5201 && XP <= 6400) {
    console.log(mensagem + 'Esmeralda.')
} else if (XP >= 6401 && XP <= 7600) {
    console.log(mensagem + 'Diamante.')
} else if (XP >= 7601 && XP <= 8800) {
    console.log(mensagem + 'Ascendente.')
} else if (XP >= 8801 && XP <= 10000) {
    console.log(mensagem + 'Radiante.')
} else {
    console.log(mensagem + 'O Imortal.')
}