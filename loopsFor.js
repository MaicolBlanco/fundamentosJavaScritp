/* Estructuras repetitivas: for

En esta clase estudiaremos una de las estructuras básicas de control. 
El bucle for, se utiliza para repetir una o más instrucciones un 
determinado número de veces.

Para escribir un bucle for se coloca la palabra for seguida de 
paréntesis y llaves.
Ej. for( ){ }. Dentro de los paréntesis irán las condiciones para 
ejecutar el bucle, y dentro las llaves irán las instrucciones que 
se deben repetir.

En este ejemplo la variable i la utilizamos como contador. */

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

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANHO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;

const adelgazar = persona => persona.peso -= INCREMENTO_PESO;

for (var i = 1; i <= DIAS_DEL_ANHO; i++) {
    var ramdom = Math.random()

    if (ramdom < 0.25) {
        // aumentoDePeso
        aumentarDePeso(martin)
    } else if (ramdom < 0.5) {
        // adelgazar
        adelgazar(martin)
    }
};

console.log(`Al final del año ${martin.nombre} pesa ${martin.peso.toFixed(1)}Kg`);