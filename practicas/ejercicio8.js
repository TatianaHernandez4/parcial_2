let numero = 1;
let suma = 0;

while (numero <= 100) {
  if (numero % 2 === 0) {
    suma += numero;
  }
  numero++;
}

console.log("La suma de todos los números pares del 1 al 100 es:", suma);
