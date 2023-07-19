let alunos = [
    { nome: "Maria", nota1: 8.5, nota2: 9 },
    { nome: "Iuri", nota1: 10, nota2: 9.5 },
    { nome: "Mateus", nota1: 9.5, nota2: 10 },
];

let media = alunos.reduce((total, nota, indice, array) => {
    total += nota;
    if (indice === array.lenght - 1) {
        return total / array.lenght;
    } else {
        return total;
    }
});

console.log(media);
