

const heroes = ['Link', 'Samus', 'Snake', 'Squall', 'Barret'];

console.warn('FOR Tradicional');

for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}


//El FOR IN me permite realizar el mismo procedimiento anterior pero de una manera mas corta
console.warn('FOR IN');

for(let i in heroes){
    console.log(heroes[i]);
}


// El FOR OF me permite extraer el valor directamente del arreglo, el automaticamante recorrera el
// arreglo pero tomara los valores de cada indice
console.warn('FOR OF');

for(let heroe of heroes){
    console.log(heroe);
}