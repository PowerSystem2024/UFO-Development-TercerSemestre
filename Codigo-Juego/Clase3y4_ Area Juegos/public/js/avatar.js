function iniciarJuego() {
    let botonPersonajeJugador = document.getElementById("boton-personaje");
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajecomputadora);
}

function seleccionarPersonajeJugador() {
    let inputZuko = document.getElementById('Zuko');
    let inputKatara = document.getElementById('Katara');
    let inputAang = document.getElementById('Aang');
    let inputToph = document.getElementById('Toph');
    let inputSokka = document.getElementById('Sokka');
    let spanPersonajeJugador = document.getElementById('personaje-jugador');

    if (inputZuko.checked) {
        spanPersonajeJugador.innerHTML = 'Zuko';
    } else if (inputKatara.checked) {
        spanPersonajeJugador.innerHTML = 'Katara';
    } else if (inputAang.checked) {
        spanPersonajeJugador.innerHTML = 'Aang';
    } else if (inputToph.checked) {
        spanPersonajeJugador.innerHTML = 'Toph';
    } else if (inputSokka.checked) {
        spanPersonajeJugador.innerHTML = 'Sokka';
    } else {
        alert("Por favor, selecciona un personaje antes de continuar.");
        return;
    }

   
    
}

function seleccionarPersonajecomputadora() {
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo');
    let personajes = ['Zuko', 'Katara', 'Aang', 'Toph', 'Sokka'];
    let personajeAleatorio = personajes[Math.floor(Math.random() * personajes.length)];
    spanPersonajeEnemigo.innerHTML = personajeAleatorio;
}

window.addEventListener('load', iniciarJuego);
