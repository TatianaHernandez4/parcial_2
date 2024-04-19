function sumaNumerosPar(array) {
    let sumaPar = 0;

    // Itera sobre cada elemento del array
    for (let i = 0; i < array.length; i++) {
        // Verifica si el número es par
        if (array[i] % 2 === 0) {
            // Si es par, lo suma a la variable sumaPares
            sumaPar += array[i];
        }
    }

    // Imprime el resultado en la consola
    console.log("La suma de todos los números pares es:", sumaPar);
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sumaNumerosPar(numeros);
