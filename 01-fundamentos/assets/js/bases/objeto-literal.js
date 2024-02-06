let personaje = {
    nombre: 'Tony Start',
    codName: 'Iron Man',
    vivo: false,
    edad: 40,
    cordenadas:{
        lat: 34.035,
        lng: -118.70
    },
    trajes: ['Marks 1', 'Marks V', 'Hulkmarks'],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }

};

console.log('Personaje:', personaje.nombre, 'es', personaje.apellido);

console.log('Numero de trajes:',personaje.trajes.length );

console.log('Numero de trajes:',personaje.trajes[2] );


// La palabra delete antes de un objeto me permite borrar una propiedad
// dentro de ese objeto
delete personaje.edad;
console.log(personaje);

// El metodo Object.entries() recibe como argumento un objeto y retorana
// un arreglo de arreglos, cada propiedad y el valor del objeta quedara en 
// un arreglo dentro del arreglo padre
const entriesPares = Object.entries(personaje);
console.log(entriesPares);


// Para adicionar una nueva propiedad o tributo a un objeto, basta con hacer referencia
// al objeto y asignar un valor a esa propiedad.
personaje.edad = 40;
console.log(personaje);


// Puedo cambiar el valor de las propiedades de un objeto sin importar si ha sido
// declaro como una constante
// Pero existe propiedad que me permite que no se pueda realizar cambios a propiedades directas
// Si la propiedad es un objeto anidado o un arreglo, esas no se podran bloquear

Object.freeze(personaje);

personaje.dinero = 100000000;
personaje.casado = false;

console.log(personaje);

// Tambien es posible obtener todas las propiedades de un objeto sin los valores
// el metodo es Object.getOwnPropertyNames(), recibe como parametro un objeto y el
// retorno es un arreglo con todos los nombres de las propiedades;

const propiedades = Object.getOwnPropertyNames( personaje );
console.log(propiedades);

// Tambien puedo obtener los valores de las propiedades en un arreglo
// con el metodo Object.values(), recibe como parametro un objeto
const valores = Object.values( personaje );
console.log(valores);


// Pagina de referencia
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object