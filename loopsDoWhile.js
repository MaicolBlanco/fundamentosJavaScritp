/* Estructuras repetitivas: do-while

Otra estructura repetitiva es el do-while. A diferencia de 
la instrucción while, un bucle do…while se ejecuta una vez 
antes de que se evalúe la expresión condicional.

Reto, resuelve el bug que tiene el ejercicio. */

var contador = 0; 

const llueve = () => Math.random() < 0.25

do {
    //contador +=1
    //Es igual 
    contador++
} while (!llueve());
/*Usa tipo condiciones ternarias "condicion ? se cumple : No se cumple"*/
console.log(`1. Fui a ver si llovía ${contador} ${contador > 1 ? 'veces' : 'vez'}`);

/* Tambien se puede hacer de la forma de abajo, q comprendo aún más*/

do {
    contador += 1
} while (!llueve())

if (contador === 1) {
    console.log(`2. Fui a ver si llovía ${contador} sola vez`)
} else {
    console.log(`2. Fui a ver si llovia ${contador} veces`)
}
  