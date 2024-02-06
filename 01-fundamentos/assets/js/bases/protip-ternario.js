
// El operador ternario tambie nos permite usarlo dentro de funciones flecha cortas
const elMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares';

console.log(elMayor(10, 15));
console.log(tieneMembresia(true));

//tambien es posible utilizarlo dentro de un objeto o arreglo para asignar un valor

let amigo = false;
let amigosArr = [
    'tony',
    'peter',
    'Dr. strange',
    amigo ?'Thor':'Loki', //Esta evaluando la condicion para saber que valor asignar
];
console.log(amigosArr)

// Con este operador, tambien es posible realizar varias comprobaciones

let nota = 100;
let grado = nota >= 95 ? 'A+' :
            nota >= 90 ? 'A'  :
            nota >= 85 ? 'B+' :
            nota >= 80 ? 'B'  :
            nota >= 75 ? 'C+' :
            nota >= 70 ? 'C'  : 'F';

console.log({nota, grado});