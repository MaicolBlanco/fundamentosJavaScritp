/* Variables: Números
En esta clase aprenderemos variables de tipo números y las 
operaciones más comunes en este tipo de variables.

En esta clase veremos operadores matemáticos como:

suma ( + )
resta ( - )
multiplicación
división
Recuerda que en operaciones con decimales debemos realizar operaciones 
adicionales para conseguir un resultado preciso. 
Ej. var total = ( precioDeVino * 100 * 3) / 100

Para redondear una operación se utiliza la función: Math.round */


var edad = 36;

/* Esto se llama incremento */
edad1 = edad + 1 ;
/* += 1 es igual a lo que teniamos en la parte de arriba */
edad += 1

var peso = 68;
/* Tambien se puede restar */
peso1 = peso - 2
/* De esta otra forma tambien se puede restar -= */
peso -= 2

var sandwich = 1
peso1 = peso + sandwich
/* Podemos reescribirlo de la siguiente manera */
peso += sandwich

var jugarAlFutbol = 3
/* Podemos reescribirlo de la siguiente forma */
peso1 = peso - jugarAlFutbol
peso -= jugarAlFutbol

/* Ejemplo con Decimales */

var precioDeVino = 200.3

var total1 = precioDeVino * 100 * 3 / 100 
/* Podemos usar una libreria de jS para redondear
la cual es: Math.round() */

var total = Math.round(precioDeVino * 100 * 3) / 100 
/* Para ponder Decimales pero por medio de un string
usamos toFixed(Decimales Requeridos) Ojo es un string */
var totalStr = total.toFixed(2);
/* Para transformar un string a un Decimal
Usamos parseFloat */
var total2 = parseFloat(totalStr)

/* Como hacer una División */

var pizza = 8; 
var personas = 2;
var cantidadDePorcionesPorPersona = pizza / personas

/* Tener encuenta la presición con la que javaScrip Calcula
o realiza los calculos, tener encuenta los decimales, las fracciones */

