// > COERÇÃO (CONVERSÃO DE TIPOS

// - 1 Coerção Explícita (Manual)
const numero = 10;
console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('123123')) //sempre útilize Number
console.log(parseFloat('12312412'))
console.log(parseInt('32424.224'))

console.clear()

// - 2 Cerção Implícita (Automática)

console.log(10 + '1')
console.log('10' - 1)
console.log(10 * '3')

console.clear()

// EXERCÍCIO

// Saída desse código?
let n = 1 + "1";

n = n - 1;

console.log(n)

//Saída do código?
console.log(2 + 3 + 4 + '5');

//Saída do código?
console.log('5' + 2 + 3 + 4);

//Saída do código?
console.log('10' - '4' - '3' - 2 + '5')
