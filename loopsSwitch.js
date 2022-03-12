/* Condicional múltiple: switch

Una ultima estructura de control se llama switch. Switch se utiliza 
para realizar diferentes acciones basadas en múltiples condiciones.

Prompt, muestra un cuadro de mensaje que le pide al usuario que 
ingrese algúna información.

Break, sirve para que el browser se salte un bucle. */

// prompt('¿Cuál es tu signo Zodiacal?')

var signo = prompt('¿Cuál es tu signo Zodiacal?');

switch (signo) {
    case 'aries':
        console.log('Maneja los cambios con inteligencia para que el camino al éxito sea más seguro y muy agradable. Es necesario que cuides tu salud; el aire fresco y las caminatas cortas en terreno plano son un buen medio para conseguirlo, tomando todas las precauciones necesarias.')
        break;
    case 'tauro':
        console.log('Te cobijan grandes alianzas espirituales que te dan el apoyo, protección y luz que necesitas para tu cambio. Mantente sereno y optimista. Hoy tienes muy buenas perspectivas para planificar actividades de comercio que te permitan general algún tipo de recursos.');
        break;
    case 'geminis':
    case 'géminis':
        console.log('Tu familia necesita mayor participación de tu parte en las actividades, procura que así sea. Las ganancias monetarias aumentan y la alegría vuelve. Buen día para olvidarte de las preocupaciones y recuperar la tranquilidad que necesitas.');
        break;
    case 'cancer':
    case 'cáncer':
        console.log('Los cambios actuales dan paso a cosas nuevas y para ti los hay muy notorios en lo económico; así que mantente alerta. La parte sentimental pide renovación y más espontaneidad, dale más importancia y seriedad. Haciendo ejercicios puedes vencer la pereza y el estrés.');
        break;
    case 'sagitario':
        console.log('La parte laboral marcha lento, pero con paso seguro. Si aplicas tu agilidad mental para los negocios no tendrás pérdidas ni preocupaciones y sí buenas ganancias. Ya puedes apuntar tus flechas con mayor precisión y lograr que todo lo que has proyectado culmine con éxito.');
        break;
    case 'capricornio':
        console.log('Debes aprovechar la buena energía planetaria para suprimir las sensaciones equivocadas, de tal forma que puedas guiarte por la intuición en todos los campos. Es posible que en este momento te sea difícil aceptarlo, pero te acercas al momento de la abundancia y solo tienes que prepararte para disfrutarla bien.');
        break;
    default:
        console.log('No es un signo zodiacal válido')
        break;
}