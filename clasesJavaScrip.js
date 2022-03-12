/* Clases en JavaScript
Las clases de JavaScript son introducidas en el ECMAScript 2015 
y son una mejora en la sintaxis sobre la herencia basada en 
prototipos de JavaScript.
La palabra clave extends se usa en declaraciones de clase o 
expresiones de clase para crear una clase que es hija de otra clase.
El método constructor es un método especial para crear e 
inicializar un objeto creado a partir de una clase. */

/* Funciones como parámetros
En JavaScript, los parámetros de funciones son por defecto undefined. 
De todos modos, en algunas situaciones puede ser útil colocar 
un valor por defecto diferente que lo evalúe como verdadero. */

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn) {
        var { nombre, apellido } = this

        console.log(`Hola, me llamo ${nombre} ${apellido} y mido ${this.altura}`)
        if (fn) {
            fn(nombre, apellido)
        }
    }
    soyAlto() {
        return this.altura > 1.69
    }
};

class Desarrollador extends Persona {
    // extends es lo que se llama herencia
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
        
    }
    saludar(fn) {
        var { nombre, apellido } = this
        /* Es igual o equivalente a lo de abajo */
        // var nombre = this.nombre
        // var apellido = this.apellido
        console.log(`Hola me llamo ${nombre} ${apellido} y soy un Chiquilin`))
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
};

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mirá, no sabía que eras Desarrollador/a `)
    }
}
var martin = new Desarrollador('Martin', 'Blanco', 1.16);
var maicol = new Persona('Maicol', 'Blanco', 1.71);
var vivian = new Persona('Vivian Lorena', 'Guevara', 1.62);

martin.saludar(responderSaludo)
maicol.saludar()
vivian.saludar(responderSaludo)

