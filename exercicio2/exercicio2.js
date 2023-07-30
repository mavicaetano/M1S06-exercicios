/* Crie um array com uma lista de objetos, cada um representando um aluno. Cada aluno deve possuir as propriedades nome (string), 
nota1 (number) e nota2 (number).
Utilize uma função de array, como map, filter ou reduce, para calcular a média das notas de cada aluno.
Crie um novo array contendo objetos com as propriedades nome e media, onde media é a média das notas.
Exiba o array resultante no console, ordenado em ordem decrescente de média.*/

let aluno = [
    { nome: "Maria", nota1: 8.5, nota2: 9 },
    { nome: "Iuri", nota1: 10, nota2: 9.5 },
    { nome: "Mateus", nota1: 9.5, nota2: 10 },
];

let media = aluno.map((aluno) => {
    return {
        nome: aluno.nome,
        media: (aluno.nota1 + aluno.nota2) / 2
    }
}).sort((aluno1, aluno2) => {
    return aluno2.media - aluno1.media
});

console.log(media);
