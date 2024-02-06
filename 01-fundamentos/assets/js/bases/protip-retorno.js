
// Funcion de flecha que me permite retornar un objeto con una sola linea de codigo
// esto es posible porque despues de declarar la función, inmediatamente se espera un retorno
const crearPersona = (nombre, edad) => ({nombre, edad});


// Función tradicional que imprime los argumentos que se le pasan a la funcion
// que la funcion no los esta pidiendo
function imprimeArgumentos(){
    console.log(arguments);
}
// Esta funcion, realiza lo mismo que la anterior funcion tradicional pero es necesario poner el parametro
// REST que son los 3 puntos antes del argumento, lo que le indica a la funcion  que los argumentos que
// seran retornados con forma de arreglo
const imprimeArgumentos2 = (...argu) =>{
    console.log(argu);
}