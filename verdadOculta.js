/* La verdad oculta sobre las clases en JavaScript

Los objetos en JavaScript son “contenedores” dinámicos de 
propiedades. Estos objetos poseen un enlace a un objeto prototipo. 
Cuando intentamos acceder a la propiedad de un objeto, la propiedad 
no sólo se busca en el propio objeto sino también en el prototipo 
del objeto, en el prototipo del prototipo, y así sucesivamente hasta 
que se encuentre una propiedad que coincida con el nombre o se 
alcance el final de la cadena de prototipos. */

function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

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

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
};

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy un Chiquilin`)
};


// 'new' es una palabra reservada, se usa para crear nuevos objetos
// dado un prototipo y se hace referencia con la palabra 'this'
// let martin = new Persona('Martin', 'Blanco', 1.16);
// let maicol = new Persona('Maicol', 'Blanco', 1.71);
// let vivian = new Persona('Vivian Lorena', 'Guevara', 1.62);

