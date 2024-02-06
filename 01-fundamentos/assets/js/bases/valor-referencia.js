

// El paso por referencia en javascript siempre se da en colecciones de datos como
// arreglos u objetos, es decir que si modificamos el valor en un lugar, se vera afectado en todos
// los demas lugares que se le haga referencia, esto es debido porque en las colecciones, simpre
// hace referencia al espacio en memoria al que apunta

//el operador spread para los arreglos ayuda a romper esa relacion y deja de pasar los valores por 
// referencia
let frutas = ['Manzana', 'Pera','Piña'];
let otrasFrutas = [...frutas];// ´para arreglos se debe poner corchetes y luego el operador SPREAD
console.log({otrasFrutas});


// Para los objetos sucede lo mismo, el valor es pasado por referencia, debemos hacer uso del operador
// SPREAD para romper esa relacion y obtener un nuevo objeto

const persona1 = {
    nombre: 'Tony',
    apellido: 'Start',
    edad: 40,
    casado: true,
    trajes: ['Marks 1', 'Marks 2', 'Marks 5'],
}

const persona2 ={...persona1};

persona2.nombre = 'Peter';
persona2.apellido = 'Parker'
persona2.edad = 28;
persona2.casado = false;
persona2.trajes = 'Metal Araña';


console.log(persona1);
console.log(persona2);


// Existen mas formas pero esta es muy buena practica y simple de aplicar

