/* Diferencias entre var, let y const

““var”” es la manera más antigua de declarar variables. No es muy estricta en 
cuanto al alcance, ya que al declarar variables de esta forma, dichas variables 
podrán ser accedidas, e incluso modificadas, tanto dentro como fuera de los bloques 
internos en una función.

Con ““let”” por otra parte, el alcance se reduce al bloque (las llaves) en el cual 
la variable fue declarada. Fuera de este bloque la variable no existe. Una vez 
declarada la variable con let, no se puede volver a declarar con en ninguna otra 
parte de la función.

““const”” al igual que ““let”” se define en el contexto o alcance de un bloque, 
a diferencia de let y var, las variables definidas como constantes (const), 
ya no podrán ser modificadas ni declaradas nuevamente, en ninguna otra parte 
de la función o el contexto en el que ya existen.

La recomendación es reducir siempre al mínimo el alcance de nuestras variables, 
por lo que se debe usar let en lugar de var mientras sea posible. */

var martin = {
  nombre: 'MartinChiquilin',
  apellido: 'El pollín',
  edad: 5
}

function esMayorDeEdad(persona) {
  if (persona.edad >= 18) {
    var mensaje = 'con "var" Es mayor de Edad'
  } else {
    var mensaje = 'con "var" Aun eres un Chiquitin'
  }
  console.log(mensaje)
}

/* Con la variable "let" el alcance no es igual podemos probar en la consola */
function esMayorDeEdad1(persona) {
  let mensaje
  const MAYORIA_EDAD = 18
  if (persona.edad >= MAYORIA_EDAD) {
    //let mensaje1 = 'Es mayor de Edad'
    mensaje1 = 'con "let" Es mayor de Edad'
  } else {
    //let mensaje1 = 'Aun eres un Chiquitin'
    mensaje1 = 'con "let" Aun eres un Chiquitin'
  }
  console.log(mensaje1)
}

esMayorDeEdad(martin)

esMayorDeEdad1(martin)

/* Otro ejemplo para saber el uso de "var" , "let" y "const" */
for (var i = 0; i < 10; i++) {
  console.log(i)
}

console.log(`Término el for, el valor de i es: ${i}`)
/* El mismo ejemplo con "let" */
for (let j = 0; j < 10; j++) {
  console.log(j)
}

console.log(`Término el for, el valor de i es: ${j}`)