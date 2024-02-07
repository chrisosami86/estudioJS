// Forma de declara una funcion anonima y auto-invocarse
// Esto es conocido como metodologia por modulos en JavaScript
(() => {
    'use strict'; // Esto me permite que javascript se estricto y no me deje manipular variables o funciones de manera externa

    // Funcion para crear una baraja desordenada
    const crearDeck = (baraja, tipos, unicas) => {
        baraja = [];
        for(let i=2; i<= 10; i++){
            for (let tipo of tipos){
                baraja.push(i + tipo);
            }
        }

        for ( let tipo of tipos){
            for( let unica of unicas){
                baraja.push(unica + tipo);
            }
        }    
         
        return _.shuffle(baraja);
    };


    // Funcion para pedir una carta y eliminarla de la baraja
    const pedirCarta = (baraja) => {
        if(baraja.length === 0){
            throw 'No hay cartas en el deck';
        }        
        return baraja.pop();
    };


    // Funcion para darle valor a cada carta

    const valorCarta = (carta) => {
        let valor = carta.substring(0, carta.length -1);
        let puntos = 0;  
        puntos = (isNaN(valor)) ? (valor ==='A') ? 11 : 10 : valor * 1;
        return puntos;
    };

    //Declaracion de variables
    let deck              = [];
    let pintas            = ['C', 'D', 'H', 'S'];
    let especiales        = ['A', 'J', 'Q', 'K'];
    let puntosJugador     = 0;
    let puntosComputadora = 0;

    // Creando baraja desordenada
    deck = crearDeck(deck, pintas, especiales);

    // Referencias HTML
    // Se crea una conexion entre los elementos html que necesito manipular y mi codigo javascript
    const btnPedir          = document.querySelector('#btnPedir');
    const btnDetener        = document.querySelector('#btnDentener');
    const btnNuevo          = document.querySelector('#btnNuevo');
    const txtPuntos         = document.querySelectorAll('small');
    const jugadorCartas     = document.querySelector('#jugador-cartas');
    const computadoraCartas = document.querySelector('#computadora-cartas');

    // Eventos Sobre HTML


    const turnoPC = ( playerPoints ) => {
        do{
            const carta             = pedirCarta(deck);
            puntosComputadora      += valorCarta(carta);
        
            txtPuntos[1].innerText  = puntosComputadora;
            const imgCarta          = document.createElement('img'); 
            imgCarta.src            = `assets/cartas/${carta}.png`; 
            imgCarta.classList.add('carta'); 
            computadoraCartas.append(imgCarta);

            if (playerPoints > 21){
                break;
            }

        }while((puntosComputadora < playerPoints) && playerPoints <= 21);

        setTimeout(() =>{
            if((playerPoints <= 21) && (playerPoints > puntosComputadora)){
                alert('Felicidades Ganaste');
            } else if ((playerPoints <= 21) && (playerPoints === puntosComputadora)){
                alert('Es un empate');
            }else if((playerPoints <= 21) && (puntosComputadora > 21)){
                alert('Felicidades Ganaste');
            }else{
                alert('Perdiste');
            }
        }, 20);

    };



    btnPedir.addEventListener('click', () => {   // añade un evento de escucha en un elemento, para este caso es el
        const carta               = pedirCarta(deck); // evento de click
        puntosJugador          += valorCarta(carta);// esta forma de pasar una funcion como parametro es conocida como un callback
        txtPuntos[0].innerText  = puntosJugador;  //innerText permite insertar texto entre un tag de etiquetas html

        const imgCarta          = document.createElement('img'); // Crea un elemento en el html de tipo img
        imgCarta.src            = `assets/cartas/${carta}.png`; // a la etiqueta img le pone un valor al atributo src
        imgCarta.classList.add('carta'); // a la etiqueta img le añade una clase para que los estilos tengan efecto
        jugadorCartas.append(imgCarta); // añade la etiqueta img entre un elemento que ya existe en el DOM para que este pueda ser visible

        if (puntosJugador > 21) {
            btnPedir.disabled = true; //deshabilita un elementoo boton
            btnDetener.disabled = true;
            turnoPC(puntosJugador);
        } else if( puntosJugador === 21){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoPC(puntosJugador);
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true; //deshabilita un elementoo boton
        btnDetener.disabled = true;
        turnoPC(puntosJugador);

    });

    btnNuevo.addEventListener('click', () => {
        deck = [];
        deck = crearDeck(deck, pintas, especiales);
        puntosJugador = 0;
        puntosComputadora = 0;
        txtPuntos[0].innerText  = puntosJugador;
        txtPuntos[1].innerText  = puntosComputadora;
        btnDetener.disabled = false;
        btnPedir.disabled = false;
        jugadorCartas.innerText = '';
        computadoraCartas.innerText = '';

        /*
        Forma en como yo lo pense
        const cartas2 = computadoraCartas.getElementsByTagName('img');
        const cartas1 = jugadorCartas.getElementsByTagName('img');
        while(cartas1.length > 0){
            jugadorCartas.removeChild(cartas1[0]);
        }


        while(cartas2.length > 0){
            computadoraCartas.removeChild(cartas2[0]);
        }
        */
    });
})();








