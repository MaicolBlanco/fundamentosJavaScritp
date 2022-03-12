/* Modificando un prototipo

En esta clase veremos cómo se modifican las clases de herencias. 
JavaScript funciona con una estructura orientada a objetos 
y cada objeto tiene una propiedad privada que mantiene un 
enlace a otro objeto llamado prototipo. */

/* El contexto de las funciones: quién es this

En esta clase explicamos por qué al introducir el arrow function
 salió un error. El error del contexto de this en JavaScript 
 es uno de los errores más comunes.

Recuerda que dentro de la arrow function, this está haciendo 
referencia al espacio global, a windows. */

//this en el espacio global es window 'this === window' es lo mismo
//this es window y window es el objeto global dentro del navegador

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    //return this, esto no se pone va implicitamente
};

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}`)
};

Persona.prototype.soyAlto = function () {
    //debugger
    return this.altura > 1.69
};

// 'new' es una palabra reservada, se usa para crear nuevos objetos
// dado un prototipo y se hace referencia con la palabra 'this'
let martin = new Persona('Martin', 'Blanco', 1.16);
let maicol = new Persona('Maicol', 'Blanco', 1.71);
let vivian = new Persona('Vivian Lorena', 'Guevara', 1.62);

