/* Filtrar un array

En esta clase aprenderemos como filtrar los arrays. Para 
filtrar siempre necesitamos establecer una condición. 
En este ejemplo nuestra condición es que la estatura de 
las personas sea mayor de 1.80mts.

El método filter ( ) crea una nueva matriz con todos los 
elementos que pasan la prueba implementada por la función 
proporcionada.

Recuerda que si no hay elementos que pasen la prueba, filter 
devuelve un array vacío.

Reto: escribe el filtrado de personas bajas. */

var martin = {
    nombre: 'Martin',
    apellido: 'Blanco',
    altura: 1.15
};

var maicol = {
    nombre: 'Maicol',
    apellido: 'Alvarez',
    altura: 1.71
};

var vivian = {
    nombre: 'Vivian Lorena',
    apellido: 'Guevara',
    altura: 1.61
};

var baby = {
    nombre: 'Por Decidir',
    apellido: 'Blanco',
    altura: 0.30
};

var oso = {
    nombre: 'Osin',
    apellido: 'Peluchin',
    altura: 1.83
};

var perro = {
    nombre: 'Pulguitas',
    apellido: 'Arrastrado',
    altura: 0.23

};

const esAlta = ({ altura }) => altura > 1.8;
const esBaja = ({ altura }) => altura < 1.8;

var personas = [martin, maicol, vivian, baby, oso, perro];

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja)

/* Otra Forma de escribir este código con una función anonima */
var personasAltas1 = personas.filter(function(persona) {
    return persona.altura > 1.8
});

console.table(personasAltas)
console.table(personasBajas)