

// Funcion para crear una baraja desordenada
const crearDeck = (baraja, tipos, unicas) => {
    for(let i=2; i<= 10; i++){
        for (tipo of tipos){
            baraja.push(i + tipo);
        }
    }

    for (tipo of tipos){
        for(unica of unicas){
            baraja.push(unica + tipo);
        }
    }    
    baraja = _.shuffle(baraja);
    return baraja;
}


// Funcion para pedir una carta y eliminarla de la baraja
const pedirCarta = (baraja) => {
    if(baraja.length === 0){
        throw 'No hay cartas en el deck';
    }
    let carta = baraja.pop();
    return carta;
}



// Funcion para darle valor a cada carta

const valorCarta = (carta) => {
    let valor = carta.substring(0, carta.length -1);
    let puntos = 0;  
    puntos = (isNaN(valor)) ? (valor ==='A') ? 11 : 10 : valor * 1;
    return puntos;
}

//Declaracion de variables
let deck              = [];
let pintas            = ['C', 'D', 'H', 'S'];
let especiales        = ['A', 'J', 'Q', 'K'];
let puntosJugador     = 0;
let puntosComputadora = 0;

// Creando baraja desordenada
deck = crearDeck(deck, pintas, especiales);

// Referencias HTML
const btnPedir          = document.querySelector('#btnPedir');
const btnDetener        = document.querySelector('#btnDentener');
const btnNuevo          = document.querySelector('#btnNuevo');
const txtPuntos         = document.querySelectorAll('small');
const jugadorCartas     = document.querySelector('#jugador-cartas');
const computadoraCartas = document.querySelector('#computadora-cartas');

// Eventos Sobre HTML
btnPedir.addEventListener('click', ()=>{
    let carta               = pedirCarta(deck);
    puntosJugador          += valorCarta(carta);
    txtPuntos[0].innerText  = puntosJugador;

    const imgCarta          = document.createElement('img');
    imgCarta.src            = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    jugadorCartas.append(imgCarta);

    if (puntosJugador > 21) {
        console.log('Perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    } else if( puntosJugador === 21){
        console.log('Eres un crack');
        btnPedir.disabled = true;
        btnDetener.disabled = true;        
    }


});



