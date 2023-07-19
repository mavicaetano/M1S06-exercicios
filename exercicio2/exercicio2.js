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
