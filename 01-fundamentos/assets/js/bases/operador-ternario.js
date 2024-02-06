const dia = 4;
const horaActual = 12;

let horaApertura;
let mensaje;

// if([0,6].includes(dia)) esta condicion es igual a la de abajo
if ( dia === 0 || dia === 6){
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Dia de Semana');
    horaApertura = 11;
}

// Todo lo anterior se puede simplificar con el siguiente codigo
// es llamado el operador ternario
horaApertura = ([0,6].includes(dia)) ? 9 : 11;


if (horaActual >= horaApertura){
    mensaje = 'Esta Abierto';
}else{
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
}

mensaje = (horaActual>=horaApertura) ? 'Esta bien abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura} lo siento`

console.log({horaApertura, mensaje});