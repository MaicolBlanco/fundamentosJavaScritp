/* Objetos

Vamos a empezar a trabajar con objetos, veremos cómo declararlos, 
cuáles son sus ventajas, cómo asignarles atributos y cómo trabajar 
con ellos dentro de las funciones.

Los objetos se definen delimitados mediante llaves {}

Un atributo se compone de una clave (key) y un valor (value), que se 
separan entre sí por dos puntos “”:"". Los valores pueden ser de tipo 
string, número, booleano, etc. Cada atributo está separado del 
siguiente por una coma. Un objeto puede tener todos los atributos 
que sean necesarios.

Escribir el nombre de un objeto separado por un punto del nombre de un 
atributo, nos permite acceder al valor de dicho atributo para ese objeto. 
Un objeto también se puede pasar como atributo en una función.

Las últimas versiones de JavaScript nos permiten desglosar el objeto 
para acceder únicamente al atributo que nos interesa. Esto se consigue 
encerrando el nombre del atributo entre llaves { }.*/


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


function imprimirNombreEnMayusculas1(nombre) {
    nombre = nombre.toUpperCase()
    console.log(nombre)
};
imprimirNombreEnMayusculas1(martin.nombre);
imprimirNombreEnMayusculas1(maicol.nombre)


/* Otra forma de escribir este código*/
function imprimirNombreEnMayusculas2(persona) {
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
};
imprimirNombreEnMayusculas2(martin);
imprimirNombreEnMayusculas2(maicol)


/* Otra forma de escribir este código*/
function imprimirNombreEnMayusculas3(persona) {
    console.log(persona.nombre.toUpperCase())
};
imprimirNombreEnMayusculas3(martin);
imprimirNombreEnMayusculas3(maicol)


/* Otra forma de escribir este código*/
function imprimirNombreEnMayusculas4({ nombre }) {
    console.log(nombre.toUpperCase())
};
imprimirNombreEnMayusculas4(martin);
imprimirNombreEnMayusculas4(maicol);
imprimirNombreEnMayusculas4({ nombre: 'Vivian' });

/* Si mandamos a imprimir sin parametros o un nombre de un 
  objeto que no hallamos declarado nos genera error */
imprimirNombreEnMayusculas4();
imprimirNombreEnMayusculas4({ apellido: 'Guevara' });
