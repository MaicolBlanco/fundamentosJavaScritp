/* Funciones que retornan valores

En esta clase seguiremos trabajando con condicionales para desglosar
las funciones en funciones más pequeñas que retornen un valor.

Debemos de tener en cuenta que el número 18 esta incluido dentro 
del rango de edad. Para ello utilizamos los símbolos >=.

Return detiene la ejecución de una función y devuelve el valor de 
esa función.

Las variables definidas con const se comportan como las variables, 
excepto que no pueden ser reasignadas. Las constantes pueden ser 
declaradas en mayúsculas o minúsculas. Pero por convención, para 
distinguirlas del resto de variables, se escribe todo en mayusculas. */

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
/* Para indicar que una variable es constante lo hacemos con 
    const y una practica muy buena cuando definimos constante 
    es escribirlas todas en mayusculas y con guión bajo*/

//var mayoriaDeEdad = 18;
const MAYORIA_DE_EDAD = 18; //Buenas Practicas


function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} Ya eres viejo, cucho, mayor de edad`)
    } else {
        console.log(`${persona.nombre} Aun eres un Chiquitin`)
    }
}

/* Como mejor entiendo o puedo escribir código es asi: */

function mayorEdad({nombre, edad}) {
    if (edad > 17) {
        console.log(`${nombre} Ya eres viejo, cucho, mayor de edad`)
    } else {
        console.log(`${nombre} Aun eres un Chiquitin`)
    }
}

mayorEdad(maicol)
mayorEdad(martin)