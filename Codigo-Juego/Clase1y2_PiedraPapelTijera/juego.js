// Variables para guardar los puntos del jugador y la computadora
let puntosJugador = 0;
let puntosComputadora = 0;

// Conectamos los elementos del HTML con el DOM (Document Object Model)
// Esto nos permite interactuar con los elementos de la página
const botonPiedra = document.getElementById('piedra');
const botonPapel = document.getElementById('papel');
const botonTijeras = document.getElementById('tijeras');
const botonReiniciar = document.getElementById('reiniciar');
const elementoResultado = document.getElementById('resultado');
const elementoPuntosJugador = document.getElementById('puntos-jugador');
const elementoPuntosComputadora = document.getElementById('puntos-computadora');

// Añadimos eventos a los botones: cuando se hace clic, se ejecuta la función correspondiente
botonPiedra.addEventListener('click', () => jugar('piedra'));
botonPapel.addEventListener('click', () => jugar('papel'));
botonTijeras.addEventListener('click', () => jugar('tijeras'));
botonReiniciar.addEventListener('click', reiniciarJuego);

// Función que devuelve una elección aleatoria para la computadora (piedra, papel o tijeras)
function obtenerEleccionComputadora() {
    // Generamos un número aleatorio entre 0 y 2 (usamos Math.random() y Math.floor())
    const numero = Math.floor(Math.random() * 3);
    
    // De acuerdo al número aleatorio, devolvemos la elección de la computadora
    if (numero === 0) return 'piedra';
    if (numero === 1) return 'papel';
    return 'tijeras';
}


// Función principal del juego: se ejecuta cuando el jugador hace una elección
function jugar(eleccionJugador) {
    // La computadora hace su elección llamando a la función 'obtenerEleccionComputadora'
    const eleccionComputadora = obtenerEleccionComputadora();

    // Mostramos lo que eligió el jugador y la computadora en la página web
    elementoResultado.innerHTML = `Tú elegiste: <strong>${eleccionJugador}</strong> | 
                                   Computadora eligió: <strong>${eleccionComputadora}</strong><br>`;

    // Lógica para determinar quién ganó o si fue empate
    if (eleccionJugador === eleccionComputadora) {
        // Si la elección del jugador es igual a la de la computadora, es un empate
        elementoResultado.innerHTML += '¡Empate! 😐';
    } else if (
        (eleccionJugador === 'piedra' && eleccionComputadora === 'tijeras') || // Piedra gana a tijeras
        (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') || // Papel gana a piedra
        (eleccionJugador === 'tijeras' && eleccionComputadora === 'papel')    // Tijeras gana a papel
    ) {
        // Si el jugador gana, incrementamos su puntaje y mostramos el mensaje de victoria
        elementoResultado.innerHTML += '¡Ganaste!  😁';
        puntosJugador++; // Aumentamos el puntaje del jugador
        elementoPuntosJugador.textContent = puntosJugador; // Actualizamos el puntaje en la página
    } else {
        // Si el jugador pierde, incrementamos el puntaje de la computadora y mostramos el mensaje de derrota
        elementoResultado.innerHTML += '¡Perdiste! 😢';
        puntosComputadora++; // Aumentamos el puntaje de la computadora
        elementoPuntosComputadora.textContent = puntosComputadora; // Actualizamos el puntaje de la computadora en la página
    }
    
}

// Función para reiniciar el juego: se ejecuta cuando el jugador hace clic en "Reiniciar"
function reiniciarJuego() {
    // Reseteamos los puntos del jugador y de la computadora
    puntosJugador = 0;
    puntosComputadora = 0;

    // Actualizamos el marcador en la página para reflejar los puntos reiniciados
    elementoPuntosJugador.textContent = puntosJugador;
    elementoPuntosComputadora.textContent = puntosComputadora;

    // Reiniciamos el mensaje de resultado
    elementoResultado.textContent = 'Esperando tu elección...';
  
}
