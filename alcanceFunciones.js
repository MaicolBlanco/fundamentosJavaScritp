/* El alcance de las funciones

En esta clase hablaremos del alcance que tienen las funciones. 
Si una variable no está definida dentro del cuerpo de una función 
hablamos de una variable global. Por el contrario, una variable definida 
dentro de una función es una variable local.

Para que la ejecución de una función no modifique una variable global 
usamos parámetros en lugar de pasar directamente la variable.

Es posible utilizar el mismo nombre para una variable global y para 
el parámetro de una función con un alcance local. */

var nombre = 'Martin';

function imprimirNombreEnMayusculas(nombre) {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)