/* Cómo funcionan las clases en JavaScript

Las clases son funciones cuya sintaxis tiene dos componentes:

expresiones
declaraciones
En esta clase veremos el uso de this. Dentro de una función, 
el valor de this depende de cómo es llamada ésta.

Reto: agrega el atributo altura y la función soyAlto. */

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    //return this, esto no se pone va implicitamente
};

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}`)
};

Persona.prototype.esAlto = function() {
    if (this.altura > 1.69){
      console.log('Soy un gigante');
    }
    else {
      console.log('Aún soy bajito, tipo hoobit');
    }
  };

// 'new' es una palabra reservada, se usa para crear nuevos objetos
// dado un prototipo y se hace referencia con la palabra 'this'
let martin = new Persona('Martin', 'Blanco', 1.16);
let maicol = new Persona('Maicol', 'Blanco', 1.71);
let vivian = new Persona('Vivian Lorena', 'Guevara', 1.62);
martin.saludar();
martin.esAlto()
/* En consola podemos llamar a vivian.saludar() y a todos */