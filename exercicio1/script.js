import somaArray from "./somaArray";
import multiplicaArray from "./multiplicaArray";
import calculaMedia from "./calculaMedia";

let array = [];

for (let i = 0; i < 5; i++) {
    let numero = prompt("Digite um número: ");
    array.push(numero);
}

console.log("Os números digitados foram: ", array);