//Dado el siguiente array: let numeros = [1, 2, 3, 4, 5] , escribe un código que calcule la suma de todos los números e imprima el resultado en la consola.

let numeros = [1, 2, 3, 4, 5];
let suma = 0;


for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log("La suma de todos los números es:", suma);
