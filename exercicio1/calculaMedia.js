import somaArray from "./somaArray.js";

export default function calculaMedia (array) {
    let soma = somaArray(array);

    return soma / array.length;
}