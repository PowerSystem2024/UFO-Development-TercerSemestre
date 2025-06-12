

let ataqueJugador  //variable global
let ataqueEnemigo   //Variable global

let vidasJugador = 3;
let vidasEnemigo = 3;


let botonReglas;


let botonesIniciales;

function iniciarJuego() {
    sectionContenedorReglas=document.getElementById("contenedor-reglas");
    sectionContenedorReglas.style.display="none";
    let botonPersonajeJugador = document.getElementById("boton-personaje");
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);
    // botonPersonajeJugador.addEventListener("click", seleccionarPersonajecomputadora);
    let botonPunio = document.getElementById('boton-punio')
    botonPunio.addEventListener('click', ataquePunio)
    let botonPatada = document.getElementById('boton-patada')
    botonPatada.addEventListener('click', ataquePatada)
    let botonBarrida = document.getElementById('boton-barrida')
    botonBarrida.addEventListener('click', ataqueBarrida)
    spanVidasJugador = document.getElementById("vidas-jugador");
    spanVidasEnemigo = document.getElementById("vidas-enemigo");

    botonesIniciales=document.getElementById("botones-regla-jugar");
    botonesIniciales.style.display="flex";

     botonVerReglas();

    
 

}
function botonVerReglas(){

    botonReglas=document.getElementById('reglas');
    botonReglas.addEventListener('click',verReglas);
    

}

function verReglas(){

    botonesIniciales.style.display="none";
   // sectionContenedorReglas=document.getElementById("contenedor-reglas");
    sectionContenedorReglas.style.display="block";
    volverInicio();
}

function volverInicio(){
    let botonVolverInicio=document.getElementById("volver-inicio");
    botonVolverInicio.addEventListener('click',iniciarJuego);
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

seleccionarPersonajecomputadora() 
    
}

function seleccionarPersonajecomputadora() {
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo');
    let personajes = ['Zuko', 'Katara', 'Aang', 'Toph', 'Sokka'];
    let personajeAleatorio = personajes[Math.floor(Math.random() * personajes.length)];
    spanPersonajeEnemigo.innerHTML = personajeAleatorio;
}

function ataquePunio (){  // modificamos la variable global 
    ataqueJugador='Punio'
    ataqueAleatorioEnemigo()
    combate()
}

function ataquePatada (){
    ataqueJugador='Patada'
    ataqueAleatorioEnemigo()
    combate()
}

function ataqueBarrida (){
    ataqueJugador='Barrida'
    ataqueAleatorioEnemigo()
    combate()
}

function aleatorio (min, max){  // a modo de ejemplo agregamos la funcion por separado proque es lo mismo que seleccionarpersonaje
    return Math.floor(Math.random() * (max - min +1) + min);
}

function ataqueAleatorioEnemigo(){ // ahora ocupando la variable global nueva le decimos
    let ataqueAleatorio = aleatorio (1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'Punio'
    } else if (ataqueAleatorio ==2){
        ataqueEnemigo = 'Patada'
    }else {
        ataqueEnemigo ='Barrida'
    }
    

}

function combate() {
    let resultado;

    if (ataqueJugador == ataqueEnemigo) {
        resultado = "Empate 😐";
    } else if (
        (ataqueJugador == "Punio" && ataqueEnemigo == "Barrida") ||
        (ataqueJugador == "Patada" && ataqueEnemigo == "Punio") ||
        (ataqueJugador == "Barrida" && ataqueEnemigo == "Patada")
    ) {
        resultado = "¡Ganaste esta ronda! 🎉";
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        resultado = "Perdiste esta ronda 😢";
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }
    crearMensaje(resultado)
    // mostrarMensaje(`Seleccionaste: ${ataqueJugador} 🆚 Enemigo: ${ataqueEnemigo} ➤ ${resultado}`);
    
    revisarFinDelJuego();
}

function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu personaje ataco con ' + ataqueJugador + '🆚 el personaje enemigo ataco con ' + ataqueEnemigo + ' - ' + resultado
    sectionMensaje.appendChild(parrafo)
}


function revisarFinDelJuego() {
    if (vidasEnemigo == 0) {
        mostrarMensajeFinal("🎉 ¡Ganaste el juego completo! 🍾");
        deshabilitarBotonesAtaque();
    } else if (vidasJugador == 0) {
        mostrarMensajeFinal("💀 Has perdido el juego... ¡Inténtalo de nuevo!");
        deshabilitarBotonesAtaque();
    }
}

function mostrarMensajeFinal(mensaje) {
    const seccionMensajes = document.getElementById("mensajes");
    seccionMensajes.innerHTML += `<p><strong>${mensaje}</strong></p>`;
}

// function mostrarMensaje(mensaje) {
//     const seccionMensajes = document.getElementById("mensajes");
//     seccionMensajes.innerHTML = `<p>${mensaje}</p>`;
// }

function deshabilitarBotonesAtaque() {
    document.getElementById('boton-punio').disabled = true;
    document.getElementById('boton-patada').disabled = true;
    document.getElementById('boton-barrida').disabled = true;
}


// 


window.addEventListener('load', iniciarJuego);
