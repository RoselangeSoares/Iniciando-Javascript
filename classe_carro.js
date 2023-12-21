/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilômetros rodado.
Crei um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso.
*/
class Carro {
    Marca;
    Cor;
    ConsumoPorKm;

    constructor(marca, cor, consumoPorKm) {
        this.Marca = marca;
        this.Cor = cor;
        this.ConsumoPorKm = consumoPorKm;
    }
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.ConsumoPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1 / 12)
console.log(uno.calcularGastoDePercurso(70, 5.50))
const palio = new Carro('Fiat', 'Vermelho', 1 / 10)
console.log(palio.calcularGastoDePercurso(70, 5.50))
