/* Variables: Strings
Los strings son cadenas de texto. Para indicar que estamos usando una
cadena de texto debemos de colocar las comillas simples.

En este curso utilizaremos los métodos:

toUpperCase, que sirve para transformar un String a mayúsculas.
toLowerCase, que sirve para transformar el string a minúsculas.
También usaremos el atributo:

length, que nos indica la cantidad de caractéres que tiene un string.
Para concatenar dos strings se utiliza el símbolo (+)
var nombreCompleto = nombre + ’ ’ + apellido

Desafío: Encuentra la última letra de su nombre */


var nombre = 'MartinChiquilin', apellido = 'Blanco';

//Usamos .toUpperCase() Para pasar el string a Mayusculas
var nombreEnMayusculas = nombre.toUpperCase();
//Usamos .toLowerCase() Para pasar el string en Minusculas
var apellidoEnMinusculas = apellido.toLowerCase();

// Si quieremos saber la primera letra de un string ó Nombre
//Usamos .charAt(0) y dentro del parametro podemos elegir la 
// posición que queremos que nos muestre del string
var primeraLetraDelNombre = nombre.charAt(0);

//Para saber la cantidad de caracteres que tiene un string
//Usamos .length
var cantidadDeLetrasDelNombre = nombre.length;

// Como concatenar un string tenemos que tener encuenta los espacios
var nombreCompleto1 = nombre +  ' ' + apellido;

//Interpolación de texto `${}`
//Dentro de las {} llaves tambien podemos escribir código de jScript
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;

//Podemos acceder a un subString es decir un string dentro de un string
var str = nombre.charAt(1) + nombre.charAt(2);
//Otra forma de acceder a un subString
var str1 = nombre.substr(1, 2);

console.log('Reto, extraer la ultima letra del Nombre: Martin');
var name = 'Martin';
console.log(name.length);
console.log(name.charAt(5));