

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];

console.log({videoJuegos});
console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Fernando',
    1+2,
    function(){},
    ()=>{},
    {a: 1},
    ['X','Megaman','Zero','Dr.Light']
];

let arregloSacado = arregloCosas[7];

console.log(arregloCosas[7][3]);
console.log(arregloSacado[3]);