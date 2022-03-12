/* Funciones

Las funciones son fracciones de código reutilizable. En esta clase 
aprenderemos a definir e invocar nuestras funciones. Para definir una 
función utilizaremos la palabra reservada ““function””.

Delimitamos el cuerpo de la función usando llaves { }. Los parámetros
de la función son variables que se pasan a la función escribíendolos 
entre paréntesis ()

Definir funciones nos sirve para reutilizar código. JavaScript es un 
lenguaje interpretado, esto quiere decir que intentará ejecutar el 
código sin importar si los parámetros que le pasemos a la función estén 
invertidos o incluso incompletos. */

var nombre = 'Martin', edad = 5;
/* Para Definir una función usamos la palabra: function */
/* function: Es una palabra reservada del lenguaje */
function imprimirEdad1() {
    console.log(`${nombre} tiene ${edad} años`)
}
imprimirEdad1()

/*function(Aquí van los Parametros) {Aquí va el Cuerpo}*/

// Si queremos reutilizar una funcion:
function imprimirEdad(n, e) {
    console.log(`${n} tiene ${e} años`)
}
imprimirEdad(nombre, edad);
imprimirEdad('Maicol', 36);
imprimirEdad('Vivian', 29);
imprimirEdad('Alison', 31);
imprimirEdad(1, 'Esteban');
/* jS lo ejecuta sin detectar errores cambia de orden las variables */
imprimirEdad('Alison');
imprimirEdad('', 23);
imprimirEdad();