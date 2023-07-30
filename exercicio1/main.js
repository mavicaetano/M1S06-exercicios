/* Crie três módulos separados em arquivos distintos: somaArray.js, multiplicaArray.js e calculaMedia.js.
No módulo somaArray.js, exporte uma função chamada somaArray, que recebe um array de números como parâmetro e 
retorna a soma de todos os elementos.
No módulo multiplicaArray.js, exporte uma função chamada multiplicaArray, que recebe um array de números como parâmetro e 
retorna a multiplicação de todos os elementos.
No módulo calculaMedia.js, exporte uma função chamada calculaMedia, que recebe um array de números como parâmetro e retorna
 a média aritmética desses números.
No módulo principal, importe as três funções e solicite ao usuário que insira um array de números.
Utilize as funções importadas para calcular e exibir no console a soma, a multiplicação e a média dos elementos do array 
fornecido pelo usuário */

import somaArray from "./somaArray.js";
import multiplicaArray from "./multiplicaArray.js";
import calculaMedia from "./calculaMedia.js";

let array = [];

for (let i = 0; i < 5; i++) {
    let numero = Number(prompt("Digite um número: "));
    array.push(numero);
}

console.log("Os números digitados foram: ", array);
console.log("A soma dos números é: ", somaArray(array));
console.log("A multiplicação dos números é: ", multiplicaArray(array));
console.log("A média dos números é: ", calculaMedia(array));