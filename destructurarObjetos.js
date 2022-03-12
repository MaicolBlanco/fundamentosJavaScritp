/* Desestructurar objetos

En esta clase aprenderemos otra forma de acceder a los atributos de 
los objetos que es la desestructurización de los mismos.
Para no duplicar las variables introducir el nombre de la variable 
como parámetro de la segunda variable. Ej var{nombre} = persona

Reto: resolver la función que está comentada al final del ejercicio.*/

var martin = {
    nombre: 'Martin',
    apellido: 'Blanco',
    edad: 5
};

var maicol = {
    nombre: 'Maicol',
    apellido: 'Blanco',
    edad: 36
};
/* Otra forma de escrbir el código */
function imprimirNombreEnMayusculas(persona) {
    //var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
};
imprimirNombreEnMayusculas(martin);
imprimirNombreEnMayusculas(maicol);
// imprimirNombreEnMayusculas();


function imprimirNombreYEdad({ nombre, apellido, edad}) {
    console.log(`Hola, me llamo ${nombre} ${apellido}, y tengo ${edad} años`)
};
imprimirNombreYEdad(martin);
imprimirNombreYEdad(maicol);

/* La forma de escrbir el código destructuradamente */
function imprimirNombreEdad(persona) {
    var {nombre, apellido, edad} = persona
    console.log(`Hola, me llamo ${nombre} ${apellido}, y tengo ${edad} años`)
};
imprimirNombreEdad(martin);
imprimirNombreEdad(maicol);