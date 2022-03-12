/* Reducir un array a un valor

El método reduce() nos permite reducir, mediante una función 
que se aplica a cada uno de los elemento del array, todos los 
elementos de dicho array, a un valor único. */

var martin = {
    nombre: 'Martin',
    apellido: 'Blanco',
    altura: 1.15,
    cantidadDeLibros: 24
};

var maicol = {
    nombre: 'Maicol',
    apellido: 'Alvarez',
    altura: 1.71,
    cantidadDeLibros: 18
};

var vivian = {
    nombre: 'Vivian Lorena',
    apellido: 'Guevara',
    altura: 1.61,
    cantidadDeLibros: 1
};

var baby = {
    nombre: 'Por Decidir',
    apellido: 'Blanco',
    altura: 0.30,
    cantidadDeLibros: 7
};

var oso = {
    nombre: 'Osin',
    apellido: 'Peluchin',
    altura: 1.83,
    cantidadDeLibros: 3
};

var perro = {
    nombre: 'Pulguitas',
    apellido: 'Arrastrado',
    altura: 0.23,
    cantidadDeLibros: 5

};

const esAlta = ({ altura }) => altura > 1.8;
const esBaja = ({ altura }) => altura < 1.8;

var personas = [martin, maicol, vivian, baby, oso, perro];

const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
});

var personasCms = personas.map(pasarAlturaACms);

var acum = 0;

for (let i = 0; i < personas.length; i++) {
    acum = acum + personas[i].cantidadDeLibros;
};
console.log(`1. En total todos tienen ${acum} libros`)

/* Otra forma de escribir el código */
const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros;

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`2. En total todos tienen ${totalDeLibros} libros`)