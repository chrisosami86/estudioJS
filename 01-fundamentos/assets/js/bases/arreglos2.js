let juegos =['Zelda', 'Mario', 'Megaman', 'Metroid'];

// Muestra la cantidad de elementos de un arreglo
// Esta Propiedad no necesita parentesis al final
console.log('Largo del arreglo: ',  juegos.length);


//  La instrucción forEach me permite recorrer un arreglo y
//  realizar determinadas acciones
juegos.forEach((elemento, indice, arr)=>{
    console.log({elemento, indice, arr});
});

// Otro metodo es push, me permite insertar otro elemento en
// el arreglo en la ultima posicion y retorna el tamaño del arreglo
juegos.push('F-Zero');
console.log('------------------------');
juegos.forEach((elemento, indice, arr)=>{
    console.log({elemento, indice, arr});
});

// El metodo unshift nos permite insertar otro elemento en
// el arreglo en la primera posición y retornar el tamaño del arreglo
juegos.unshift('Kirby');
console.log('------------------------');
juegos.forEach((elemento, indice, arr)=>{
    console.log({elemento, indice, arr});
});

// El metodo pop elimina el ultimo elemento de un arreglo y retorna ese
// elemento que acaba de borrar, (no necesita parametros);
console.log('------------------------');
console.log('Juego eliminado ', juegos.pop());
console.log('------------------------');
juegos.forEach((elemento, indice, arr)=>{
    console.log({elemento, indice, arr});
});

// El metodo splice() sirve para borrar elementos dentro de un arreglo
// y retornar otro arreglo con los elementos borrados
// los parametros son 2: splice(indice donde quiere iniciar a borrar, cantidad de elementos a borrar); 
console.log('------------------------');
console.log('Juegos borrados: ', juegos.splice(1, 2));
console.log('------------------------');
console.log({juegos})

// El metodo indexOf() sirve para buscar un elemento en un arreglo y retornar
// el indice donde se encuentra
let metroidIndex = juegos.indexOf('Metroid');
console.log(metroidIndex);