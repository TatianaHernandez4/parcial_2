//1. Explica la diferencia entre los operadores == y === en JavaScript.

//R: == se utiliza para comparar solo el valor de dos variables pero el === sirve para comparar el valor y el tipo de variable 

//2. ¿Qué es una declaración switch en JavaScript y cuándo es útil su uso?

//R: el switch sirve para crear un tipo de menú con diferentes opciones, y cada opción del menú tiene diferentes funciones como una calculadora, cada caso (case) ejecutaria una operacion, sea suma, resta, multiplicacion ... 

//3.¿Cuál es la diferencia entre un array y un objeto en JavaScript? Proporciona un
//ejemplo de cada uno.

//R: el array es una matriz donde en cada espacio se va almacenar datos pero de manera ordenada , y el objeto tiene clase padre y una clase hijo, entonces los atributos se pueden guardar en la clase padre y cada atributo se puede almacenar con un dato diferente , entonces para acceder a un dato de un array debe realizarce mediante valores numéricos, mientras que en un objeto accedes mediante el nombre del atributo. 

let numeros = [0, 1, 2, 3, 4]; 
console.log(numeros[0]); 


let familia = {
    padre: "Juan",
    madre: "diana",
    hijo: "camilo"
  };
  
  console.log(familia.padre);

//4Explica cómo funciona el operador ternario en JavaScript y proporciona un ejemplo de su uso.