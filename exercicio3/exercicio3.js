/* Crie uma classe chamada Livro com as propriedades titulo (string), autor (string) e anoPublicacao (number).
Implemente um método na classe chamado obterInformacoes, que retorna uma string formatada com as informações do livro.
Crie três objetos da classe Livro, cada um representando um livro diferente.
Exiba no console as informações de cada livro, utilizando o método obterInformacoes. */

class Livro {
    constructor(titulo, autor, anoDePublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoDePublicacao = anoDePublicacao;
    }

    obterInformacoes() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Ano de publicação: ${this.anoDePublicacao}`);
    }
}

const livro1 = new Livro("O Guia do Mochileiro das Galáxias", "Douglas Adams", 1979);
const livro2 = new Livro("O Senhor dos Anéis", "J. R. R. Tolkien", 1954);
const livro3 = new Livro("O Morro dos Ventos Uivantes", "Emily Brontë", 1847);
const livro4 = new Livro("O Retrato de Dorian Gray", "Oscar Wilde", 1890);
livro1.obterInformacoes();
livro2.obterInformacoes();
livro3.obterInformacoes();
livro4.obterInformacoes();
