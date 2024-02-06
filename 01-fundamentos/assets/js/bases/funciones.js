// Forma de declarar una funcion
// se usa poco esta forma
function saludar1 ( nombre ){
    console.log('Hola ' + nombre);
}


// otra forma de declarar otra funcion
// se usa un poco mas que la anterior
const saludar2 = function( nombre ){
    console.log('Hola ' + nombre);
}

// tercera forma de declarar una funcion
// es la mas usada y la mas recomendable

const saludar3 = ( nombre )=>{
    console.log('Hola ' + nombre);
}


// forma en como se debe llamar una funcion
// una funcion debe ser llamada para poder utilizar su contenido
saludar1('Christia');
saludar2('Sofia');
saludar3('Daniel');