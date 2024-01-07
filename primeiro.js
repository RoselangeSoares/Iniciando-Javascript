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
/*
const altura = 1.80;
const peso = 145
const imc = peso / Math.pow (altura, 2)
    console.log(imc.toFixed(2))

if (imc < 18.5){
    console.log('Abaixo do Peso')
}else if (imc >= 18.5 && imc < 25) {
    console.log('Peso Normal')
}else if (imc >= 25 && imc < 30) {
    console.log('Acima do Peso')
}else if (imc >= 30 && imc <40) {
    console.log('Obeso')
}else {
    console.log('Obesidade Grave')
}
*/
/*
Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de Pagamento:
- Á Vista Débito, recebe 10% de desconto;
- Á vista no Dinheiro ou Pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/
/*
const precoEtiqueta = 100;
const formaDePagamento = 3;

if (formaDePagamento === 1){
    console.log(precoEtiqueta - precoEtiqueta * 0.1)
}else if (formaDePagamento === 2){
    console.log(precoEtiqueta - precoEtiqueta * 0.15)
}else if (formaDePagamento === 3){
    console.log(precoEtiqueta)
}else {
    console.log(precoEtiqueta + precoEtiqueta * 0.1)
}
*/
/*
//Exemplo sobre funções.
function teste(){
    console.log('teste')
}
teste();
teste();
*/
/*
function sayMayName(name){
    console.log('Your name is:' + name);
}
sayMayName('Roselange');
sayMayName('Roselange Soares');

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 170) * valor;
    return valor + valorDeAcrecimo;
}
console.log(incrementarJuros(170, 10))
console.log(incrementarJuros(170, 23))
console.log(incrementarJuros(170, 45))
*/

//ORGANIZANDO AS FUNÇÕES.      "Alt + Shift + f Para organizar."
/*
function whatYourName(nome) {
    console.log('My Name is: ' + nome);
}
whatYourName('Roselange')

function yourAge(idade) {
    console.log('My Age is: ' + idade)
    if (idade >= 18) {
        console.log('You are of legal age!')
    } else {
        console.log('You are underage!')
    }
}
yourAge('29')
*/
/*
function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}
function apliarJuros(valor, juros) {
    return valor + (valor * (juros / 100))
}
const valorDoProduto = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(valorDoProduto, 10))
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(valorDoProduto, 15))
} else if (formaDePagamento === 3) {
    console.log(valorDoProduto)
} else {
    console.log(apliarJuros(valorDoProduto, 10))
}

console.clear()

console.log((10 * 200) / 100); console.log(10 / 100)
*/
/*
torrar ('Pão Integral', 'Felipe', 10.90)
torrar ('Pão na chapa', 10.90)

function torrar(pao, valor, nome = 'Cliente') {
    console.log('Torrada feita com ' + pao)
    console.log('É um pedido de ' + nome)
    console.log('O valor total é: ' + valor)
}
*/
/*
let userName = getFirstName('Roselange Soarinho', ' ')
console.log(' Seja Bem Vindo ' + userName)
userName = getFirstName('Dasdores-Soares-Silva', '-')
console.log(' Seja Bem Vindo ' + userName)

function getFirstName(name, splitChar) {
    let firstName = name.split(splitChar)[0]
    return firstName
}
*/

switch ('Banana') {
    case "Laranja":
        console.log("O quilo da laranja está R$0,59.<br>");
        break;
    case "Maçã":
        console.log("O quilo da maçã está R$0,32.<br>");
        break;
    case "Banana":
        console.log("O quilo da banana está R$0,48.<br>");
        break;
    case "Cereja":
        console.log("O quilo da cereja está R$3,00.<br>");
        break;
    case "Manga":
        console.log("O quilo da manga está R$0,56.<br>");
        break;
    case "Mamão":
        console.log("O quilo do mamão está R$2,23.<br>");
        break;
    default:
        console.log("Desculpe, não temos " + tipofruta + ".<br>");
}
console.log("Gostaria de mais alguma coisa?<br>");