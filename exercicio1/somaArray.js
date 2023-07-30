export default function somaArray (array) {
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}