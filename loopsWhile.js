/* Estructuras repetitivas: while

En esta clase estudiaremos otra estructura repetitiva llamada while. 
While se ejecuta únicamente mientras la condición que se está 
evaluando es verdadera.

En ocasiones nuestro código puede fallar por errores de syntaxis o 
errores lógicos. En caso de que quieras verificar tu código, debes 
utilizar un debugger. El código se detiene cada vez que lee esta palabra. */

var martin = {
    nombre: 'Martin',
    apellido: 'Blanco',
    edad: 5,
    peso: 20
};

console.log(`Al inicio del año ${martin.nombre} pesa ${martin.peso}Kg`);

function aumentarDePeso1({peso}) {
    return peso += 200
};

/* Son iguales */

function aumentarDePeso2(persona) {
    return persona.peso += 200
};

/* Tambien son iguales */

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANHO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = martin.peso - 3;
var dias = 0;

while (martin.peso > META) {
    //Sirve cuando el código se bloquea y este "debugger" detiene el código
    //debugger 
    if (comeMucho()) {
        aumentarDePeso(martin)
    }
    if (realizaDeporte()) {
        adelgazar(martin)
    }
    dias += 1
}

console.log(`pasaron ${dias} días hasta que ${martin.nombre} adelgazó 3 Kg`);