/* Condicionales

En esta clase empezaremos a trabajar con estructuras de control, 
éstas nos permiten decidir el flujo de nuestro código.

Empezaremos con los condicionales. Los condicionales nos permiten 
decidir si un código se ejecuta o no. También introducimos un nuevo 
tipo de datos primitivos: el booleano, que determina si un valor es 
falso o verdadero. Mediante un condicional (if) decidiremos si se 
ejecuta una parte de nuestro código cuando se cumpla o no cierta 
condición. */

var martin = {
    nombre: 'Martin',
    apellido: 'Blanco',
    edad: 5,
    ingeniero: false,
    cocinerito: true,
    cantante: false,
    estudiante: true,
    guitarrista: false,
    dj: false
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero) {
        console.log('Ingeniero')
    }

    if (persona.cocinerito) {
        console.log('Cocinerito')
    }

    if (persona.cantante) {
        console.log('Cantante')
    } else {
        console.log('No es Ingeniero')
    }

    if (persona.estudiante) {
        console.log('Estudiante feliz del melanie klain')
    }

    if (persona.guitarrista) {
        console.log('Rockero')
    }

    if (persona.dj) {
        console.log('Dijimon o pockemon')
    }
}

imprimirProfesiones(martin)

function mayorEdad(persona) {
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} Ya eres mayor de edad`)
    } else {
        console.log(`${persona.nombre} Aun eres un Chiquitin`)
    }
}
mayorEdad(martin)