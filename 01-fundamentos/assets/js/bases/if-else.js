let a = 15;

if (a >= 10){
    console.log ('A es mayor o igual a 10');
}else{
    console.log('A es menor a 10');
}

// Me permite obtener los datos de la fecha actual
const fecha = new Date();
let dia = fecha.getDay();// Domingo: 0, Lunes: 1, Martes: 2... etc
console.log(fecha);


// El triple igual me permite realizar comparacion de valor y de tipado
if ( dia === 1){
    console.log('Hoy es lunes');
}else{
    console.log('Hoy no es Lunes');
}

console.log('Fin del programa');


dia = 6;
const semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

console.log('Dia actual:', semana[dia]);




