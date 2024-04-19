let frutas = ['manzana', 'plátano', 'pera', 'naranja'];

//Eliminar el primer elemento
frutas.shift();

// Eliminar el último elemento
frutas.pop();

// Insertar un nuevo elemento al inicio del array
let nuevaFruta = 'nueva-fruta';
frutas.unshift(nuevaFruta);

console.log(frutas); // Resultado: ['nueva-fruta', 'plátano', 'pera']
