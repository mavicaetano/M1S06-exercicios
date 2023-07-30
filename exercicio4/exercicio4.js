/* Crie uma classe chamada Veiculo com as propriedades marca (string) e ano (number).
Crie uma classe chamada Carro que herde da classe Veiculo. Adicione à classe Carro a propriedade adicional portas (number).
Crie um método na classe Veiculo chamado obterDetalhes, que retorna uma string com as informações do veículo (marca e ano).
Crie um método na classe Carro chamado obterDetalhes, que sobrescreve o método na classe Veiculo e retorna uma string com as
informações do carro (marca, ano e número de portas).
Crie um objeto da classe Carro e exiba no console as informações detalhadas do carro utilizando o método obterDetalhes.*/

class Veiculo {
    constructor(marca, ano){
        this.marca = marca;
        this.ano = ano;
    }
    obterDetalhes() {
        console.log(`Marca do veículo: ${this.marca}, Ano de fabricação: ${this.ano}`);
    }
}

class Carro extends Veiculo {
    constructor (modelo, marca, ano, portas) {
        super(marca, ano);
        this.modelo = modelo;
        this.portas = portas;
    }
    obterDetalhes() {
        console.log(`Modelo do veículo: ${this.modelo}, Marca: ${this.marca}, Ano de fabricação: ${this.ano}, Número de portas: ${this.portas}.`)
    }
}
const carro1 = new Carro("Uno", "Fiat", 2014, 4);
const carro2 = new Carro("Strada", "Fiat", 2010, 2);
carro1.obterDetalhes();
carro2.obterDetalhes();