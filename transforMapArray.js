/* Transformar un array

En esta clase veremos cómo transformar un array. 
El método map() itera sobre los elementos de un array 
en el orden de inserción y devuelve array nuevo con los 
elementos modificados.*/

//console.table() Nos muestra en la consola tipo Tabla

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

const pasarAlturaACms1 = persona => {
    // persona.altura = persona.altura * 100
    /* O tambien se puede escribir: */
    return { //Esto es un nuevo Objeto que no tiene nada
        ...persona, // que ver con el que estamos pisando
        altura: persona.altura * 100
    }
};

/* Se puede escribir el código de esta forma */
const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
});

var personasCms = personas.map(pasarAlturaACms);

console.log(personasCms)