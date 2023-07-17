export default function calculaMedia (array) {
    if (array.lenght === 0) {
        return 0;
    }

    for (let i = 0; i < array.lenght; i++) {
        soma += array[i];
    }

    return media = soma / array.lenght;
}