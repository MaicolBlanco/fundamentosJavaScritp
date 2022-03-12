/* Funciones recursivas

La recursividad es un concepto muy importante en cualquier lenguaje de programación. 
Una función recursiva es básicamente aquella que se llama (o se ejecuta) a sí misma 
de forma controlada, hasta que sucede una condición base. */

/* 
Para realizar una división lo podemos hacer asi:

13 / 4

13 - 4 = 9      1
9 - 4 = 5       1
5 - 4 = 1       1
1 - 4 = -3

*/

function divisionEntera(dividendo, divisor) {
    if (dividendo < divisor) {
        return 0
    }
    return 1 + divisionEntera(dividendo - divisor, divisor)
}

/* Memorización: ahorrando cómputo
La memorización es una técnica de programación que nos permite ahorrar cómputo 
o procesamiento en JavaScript, al ir almacenando el resultado invariable de una 
función para que no sea necesario volver a ejecutar todas las instrucciones de 
nuevo, cuando se vuelva a llamar con los mismos parámetros. Es similar a usar 
memoria cache. */

/* Para calcular un número factorial lo podemos hacer de la siguiente forma:

    EJM:
    !6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
    !12 = 12 * 11 * 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
    ó
    !12 = 12 * 11 * 10 * 9 * 8 * 7 * !6

*/

function factorial(n) {
//Vamos aguardar en una cache los datos ya calculados osea que se almacenen
// Priero pregunatmos si existe una cache
    if (!this.cache) {
        this.cache = {}
    }
     //pregunatmos si existe una cache 
    debugger
    if (this.cache[n]) {
        return this.cache[n]
    }
    if (n == 1) {
        return 1
    }
    this.cache[n] = n * factorial(n -1)
    //Para saber que hace con la cache
    debugger
    return this.cache[n] 
}

/* Entiende los closures de JavaScript
Un closure, básicamente, es una función que recuerda el estado de las 
variables al momento de ser invocada, y conserva este estado a través de 
reiteradas ejecuciones. Un aspecto fundamental de los closures es que son 
funciones que retornan otras funciones. */

function crearSaludo(finalDeFrase) {
    return function(nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('che');
const saludoMexicano = crearSaludo('güey');
const saludoColombiano = crearSaludo('amigo')

saludoArgentino('Martin') // Hola Martin che
saludoMexicano('Martin') // Hola Martin güey
saludoColombiano('Martin') // Hola Martin amigo

/* Estructuras de datos inmutables
Las estructuras de datos inmutables forman parte de los principios de la Programación
Funcional y nos permiten evitar tener efectos colaterales en los datos. En otras 
palabras, que hayan modificaciones en las variables sin nuestro consentimiento, 
produciendo comportamientos inesperados en el programa. */

const martin = {
    nombre: 'Martin',
    apellido: 'Blanco',
    edad: 5
}

//const cumpleaños = persona => persona.edad++

//Otra forma de escribir el código para que no sea inmutable., no cambie

const cumpleañosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
})

/* Cambiando de contexto al llamar a una función

El contexto (o alcance) de una función es por lo general, window. Así que en 
ciertos casos, cuando intentamos referirnos a this en alguna parte del código, 
es posible que tengamos un comportamiento inesperado, porque el contexto quizás 
no sea el que esperamos.

Existen al menos tres maneras de cambiar el contexto de una función.

Usando el método .bind, enviamos la referencia a la función sin ejecutarla, pasando 
el contexto como parámetro.
Usando el método .call, ejecutamos inmediatamente la función con el contexto indicado
Usando el método .apply, es similar a .call pero los parámetros adicionales se 
pasan como un arreglo de valores */

const marty = {
    name: 'MartinChiquitin',
    apellido: 'Blanco Guevara',
};

const vivian = {
    name: 'Vivian Lorena',
    apellido: 'Guevara Agüillon',
};

function saludar(saludo = 'Hola') {
    console.log(`${saludo}, mi nombre es ${this.name}`)
}

// const saludarAmarty = saludar.bind(marty)
// const saludarAvivian = saludar.bind(vivian)

// setTimeout(saludar.bind(marty, 'Hola che'), 1000)

// saludar.call(marty, 'Hola che, Boludo')

saludar.apply(marty, ['Hola Che, como anda'])


/* ¿Cuándo hace falta poner el punto y coma al final de la línea?

El punto y coma es opcional en JavaScript, excepto en algunos casos:

Cuando usamos varias instrucciones en una mísma línea
Al comenzar la próxima línea con un array
Al comenzar la próxima línea con un template string */

alert('hola');
// ó   Se puede usar el ;
alert('Hola')

var nombre = 'Martin';
// ó   Se puede usar el ;
var nombre = 'Martin'

function saludar() {
    console.log('Blablabla')
};
// ó Según dicen que este ; no es realmente inenecesario aquí
function saludar() {
    console.log('Blablabla')
}

for (let i = 0; i < 10; i++) {
    const element = array[i]; 
};
// Este ; es 100% inecesario ponerlo 
for (let i = 0; i < 10; i++) {
    const element = array[i]; 
}

/* Las ocasiones donde si debemos usar ; */

// Si no se usa en consola va mostrar un error en pantalla
console.log('Hola mi nombre es Martin');
[1, 2, 3].forEach(n => console.log(n * 2))

//Si no se pone ; se mostrara un error en pantalla
const nombre3 = 'Martin'
console.log('Hola mi nombre es Martin');
`${nombre} es una Chiquilin`

function calcularDoble(number) {
    return { // si se da enter y queda return solo lo toma jS como un ; y no se ejecutara el código
        original: number, doble: number * 2
    }
}
