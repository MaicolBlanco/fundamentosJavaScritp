/* Arrow functions

En esta clase aprenderemos a utilizar Arrow Functions que permiten 
una nomenclatura más corta para escribir expresiones de funciones. 
Este tipo de funciones deben definirse antes de ser utilizadas.

Al escribir las Arrow Functions no es necesario escribir la palabra 
function, la palabra return, ni las llaves. */

var martin = {
    nombre: 'Martin',
    apellido: 'Blanco',
    edad: 5,
}

var maicol = {
    nombre: 'Maicol',
    apellido: 'Blanco',
    edad: 36,
}

const MAYORIA_DE_EDAD = 18; 


// var esMayorDeEdad = function (persona) { //Se conoce como función Anonima
//     return persona.edad >= MAYORIA_DE_EDAD
// }

/* Otra forma de escribir el código es con arrow function */
/* Se usa constante para saber que es una función y no una variable */
                //Se conoce como array function: =>
// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD
    // Cuando se tiene un solo parametro se quitan los parentesis ()
    // Se quita el return y las llaves que rodean al cuerpo de 
    // la función e implicitamente retorna el valor de la comparación

/* Tambien podemos destructurar el código */
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
    
function imprimirSiEsMayorDeEdad1(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} Ya eres viejo, cucho, mayor de edad`)
    } else {
        console.log(`${persona.nombre} Aun eres un Chiquitin`)
    }
}
/* Otra forma no destructurada */
const imprimirSiEsMayorDeEdad2 = (persona) => esMayorDeEdad(persona) ? console.log(`${persona.nombre} Ya eres viejo, cucho, mayor de edad`) : console.log(`${persona.nombre} Aun eres un Chiquitin`)


/* Otra forma de escribir el código de arriba y dan el mismo resultado */
const imprimirSiEsMayorDeEdad3 = ({ edad, nombre }) => esMayorDeEdad ? console.log(`${nombre} Ya eres viejo, cucho, mayor de edad`) : console.log(`${nombre} Aun eres un Chiquitin`)


function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    }
}