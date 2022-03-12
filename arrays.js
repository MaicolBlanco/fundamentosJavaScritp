/* Introducción a arrays

Los arrays son estructuras que nos permiten organizar elementos 
dentro de una collección. Estos elementos pueden ser números, 
strings, booleanos, 
objetos, etc. */

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
    altura: 0.20
};

var perro = {
    nombre: 'Pulguitas',
    apellido: 'Arrastrado',
    altura: 0.23

};

var personas = [martin, maicol, vivian, baby, oso, perro];

for (let i = 0; i < personas.length; i++) {
    const persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura} Metros`)
}