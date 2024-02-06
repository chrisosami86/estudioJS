
// La estructura while nos permite repetir un bloque de codigo mientras la condicion que le pasemos
// sea verdadera, al momento de ser falsa, saldra del ciclo y no se ejcutara mas. 
console.warn('WHILE');
let carros = ['Mazda', 'Chevrolet', 'Toyota', 'Audi'];

let contador = 0;

while(contador < carros.length){
    console.log(carros[contador]);
    contador++;
}

// Con el do-while es muy similar pero se ejecutara el codigo por lo menos una vez, luego evaluara la
// la condicion para poder repetir, en la estructura anterior solo ejecutara el codigo si la condicion 
// es verdadera
console.warn('DO-WHILE');

do{
    console.log(carros[contador-1]);
    contador++;
}while(contador < carros.length);