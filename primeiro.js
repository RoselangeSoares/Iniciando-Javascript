//Estou imprimindo duas mensagens no terminal.
//console.log('Hello Wolrd!')
//console.log('Bem vindo ao curso de JavaScript')

/*
Para comentários em mais de uma linha.
*/

/*
Faça um programa para calcular o valor de uma viagem.

Você terá variáveis. Sendo elas:
1 - Preço de combustivel;
2 - Gasto médio de combustivel do carro por KM;
3 - Distância em KM da viagem;

const precoCombustivel = 5.70;
const kmPorLitros = 10;
const distanciaEmKm = 462;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));

console.clear()
/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

imprima no console o valor que será gasto para realizar esta viagem.
/*
const precoEtanol = 3.30;
const precoGasolina = 5.70;
const tipoCombustivel = 'Gasolina';
const gastoMedioPorKm = 10;
const distanciaKm = 231;
const gastoConsumidos = distanciaKm / gastoMedioPorKm;

if (tipoCombustivel === 'Etanol') {
const valorGasto = gastoConsumidos * precoEtanol;
console.log(valorGasto.toFixed(2))
} else {
const valorGasto = gastoConsumidos * precoGasolina;
console.log(valorGasto.toFixed(2))
}

/* O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave.
*/

const altura = 1.80;
const peso = 94
const imc = peso / Math.pow (altura, 2)
console.log(imc.toFixed(2))

if (imc < 18.5){
    console.log('Abaixo do Peso')
}else if (imc >= 18.5 && imc < 25) {
    console.log('Peso Normal')
}else if (imc >= 25 && imc < 30) {
    console.log('Acima do Peso')
}else if (imc >=30 && imc <40) {
    console.log('Obeso')
}else if (imc > 40) {
    console.log('Obesidade Grave')
}