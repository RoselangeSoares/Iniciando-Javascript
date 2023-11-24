// OPERADORES BOOLEANOS

// Igualdade       == (OU ===)
// Desingualdade   != (OU !==)
// Maior que       >
// Maior ou igual  >=
// Menor que       <
// Manor ou igual  <=

const numero = 10;

console.log(numero == 10)  //quando queremos comparar números útilizamos dois iguais ex: num == 10.
console.log(numero > 20)

console.log(numero == 10)
console.log(numero == '10')
console.log(numero === '10') //para evitar bugs útilize três iguais para igualdade.

console.clear() //útilize para limpar o terminal do comando para trás.

console.log(10 != 10)
console.log(10 != '10')
console.log(10 !== '10')

console.clear()

// CONJUNÇÕES LÓGICAS

// AND => &&
let idade = 26;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true
console.log('Posso Dirigir', possoDirigir)

console.clear()

// OR => ||
idade = 40
const votoFacultativo = idade < 18 || idade >= 70
console.log('Votação', votoFacultativo)

console.clear()

// NOT => !
const estouGostandoDoCurso = false
console.log(!estouGostandoDoCurso)
