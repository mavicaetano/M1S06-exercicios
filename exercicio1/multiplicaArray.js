export default function multiplicaArray (array) {
    let multiplicacao = 1;

    for (let i = 0; i < array.length; i++) {
        multiplicacao *= array[i];
    }
    return multiplicacao;
}