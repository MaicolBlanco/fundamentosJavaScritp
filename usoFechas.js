/* ¿Hace cuántos días naciste?

Con variables de tipo Date, se pueden realizar operaciones de suma y resta 
similares a las que se realizan con números. El resultado que se obtiene está 
en milisegundos, por lo que luego hay que hacer algunas operaciones adicionales 
para llevarlos a días, meses o años según queramos. También aplica para Horas, 
Minutos, Segundos y Milisegundos. */

function diasEntreFechas(fecha1, fecha2) {
    const unDIa = 1000 * 60 * 60 * 24
    const diferencia = Math.abs(fecha1 - fecha2)

    return Math.floor(diferencia / unDIa)
}

const hoy = new Date()
const nacimiento = new Date(1984, 2, 28)


/* También existen métodos para obtener un valor de la fecha en específico. 
Estos métodos son:
getFullYear()
getMonth()
getDate()
getHours()
getMinutes()
getSeconds()
getMilliseconds()
getTime()
getDay()
Date.now() */