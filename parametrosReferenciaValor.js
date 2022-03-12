/* Parámetros como referencia o como valor

Javascript se comporta de manera distinta cuando le pasamos 
un objeto como parámetro.

Cuando los objetos se pasan como una referencia, estos se modifican 
fuera de la función. Para solucionar esto se puede crear un objeto 
diferente. Esto lo podemos hacer colocando tres puntos antes del nombre. 
Ej …persona. */

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

function imprimirNombreEdad(persona) {
    var {nombre, apellido, edad} = persona
    console.log(`Hola, me llamo ${nombre} ${apellido}, y tengo ${edad} años`)
};
imprimirNombreEdad(martin);
imprimirNombreEdad(maicol);

function cumpleanos1(persona) {
    persona.edad += 1
}

/* Se comporta de diferente manejra */
// function cumpleanos(edad) {
//     edad += 1
// }

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad +1
    }
}