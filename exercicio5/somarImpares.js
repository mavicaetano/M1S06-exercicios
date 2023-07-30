export default function somaImpares(array) {
    let impares = array.filter((number) => number % 2 != 0);
    let somaImpares = 0;

    for (let i = 0; i < impares.length; i++) {
        somaImpares += impares[i];
    }
    return somaImpares;
}