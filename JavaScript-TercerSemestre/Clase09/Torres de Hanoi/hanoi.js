// hanoi.js

// Referencias del DOM
const areaJuego = document.querySelector('.game-area');
const cantidadDiscos = document.getElementById('numDisks');
const speedRangeInput = document.getElementById('speedRange');
const resetButton = document.getElementById('resetButton');
const solveButton = document.getElementById('solveButton');
const messageDisplay = document.getElementById('message');

// Definición de las varillas lógicas y sus posiciones x
const pegPositions = {
    'A': { x: 0, disks: [] }, // x será el centro horizontal de la varilla A
    'B': { x: 0, disks: [] }, // x será el centro horizontal de la varilla B
    'C': { x: 0, disks: [] }  // x será el centro horizontal de la varilla C
};

let discos = {}; // Almacenará { 'disk-1': element, 'disk-2': element, ... }
let numDisks = 3;
let velocidad = 50; // Velocidad inicial de la animación en ms
let moveQueue = []; // Cola de movimientos { idDisco: 'disk-X', fromPeg: 'A', toPeg: 'C' }
let isAnimating = false; // Flag para evitar que el usuario resuelva mientras hay una animación

// --- Funciones de Utilidad ---

// Calcula las posiciones X de las varillas y las guarda en pegPositions
function calculatePegPositions() {
    const pegWrappers = document.querySelectorAll('.peg-wrapper');
    // Para una vista lateral, calculamos la posición central de cada "varilla"
    // Usamos el left y el ancho de cada peg-wrapper
    if (pegWrappers.length >= 3) {
        const rectA = pegWrappers[0].getBoundingClientRect();
        const rectB = pegWrappers[1].getBoundingClientRect();
        const rectC = pegWrappers[2].getBoundingClientRect();
        const gameAreaRect = areaJuego
      .getBoundingClientRect();

        pegPositions.A.x = (rectA.left + rectA.width / 2) - gameAreaRect.left;
        pegPositions.B.x = (rectB.left + rectB.width / 2) - gameAreaRect.left;
        pegPositions.C.x = (rectC.left + rectC.width / 2) - gameAreaRect.left;
    }
}

// Obtiene la posición Y (bottom) de un disco dado su índice de pila
function getDiskYPosition(stackIndex) {
    const diskHeight = 28; // Altura fija de cada disco (debe coincidir con CSS)
    const baseOffset = 10; // Margen desde la base de la varilla (debe coincidir con CSS del game-area)
    return baseOffset + (stackIndex * diskHeight);
}

// Actualiza la posición visual de un disco en el DOM (left y bottom)
function updateDiskPosition(diskElement, pegName, stackIndex) {
    // Asegurarse de que el disco tenga un ancho definido (viene del CSS, pero si no, tomarlo)
    const diskWidth = diskElement.offsetWidth;
    const xPos = pegPositions[pegName].x - (diskWidth / 2); // Centrar el disco en la varilla
    const yPos = getDiskYPosition(stackIndex);

    diskElement.style.left = `${xPos}px`;
    diskElement.style.bottom = `${yPos}px`;
}

// --- Lógica del Juego ---

// Función para inicializar o reiniciar el juego
function initializeGame() {
    if (isAnimating) return; // No reiniciar si hay una animación en curso

    numDisks = parseInt(cantidadDiscos.value);
    if (isNaN(numDisks) || numDisks < 1 || numDisks > 10) {
        messageDisplay.textContent = "Por favor, ingresa un número de discos entre 1 y 10.";
        cantidadDiscos.value = 3; // Reset to default
        numDisks = 3; // Actualizar numDisks por si el input era inválido
    }

    // Limpiar varillas lógicas y elementos DOM de discos
    pegPositions.A.disks = [];
    pegPositions.B.disks = [];
    pegPositions.C.disks = [];
    areaJuego
  .querySelectorAll('.disk').forEach(disk => disk.remove()); // Eliminar discos existentes
    discos = {}; // Limpiar referencias
    moveQueue = [];
    messageDisplay.textContent = '';
    solveButton.disabled = false;
    resetButton.disabled = false;
    cantidadDiscos.disabled = false;
    speedRangeInput.disabled = false;

    // Calcular las posiciones de las varillas (importante si el tamaño de la ventana cambia)
    calculatePegPositions();

    // Crear y añadir discos a la varilla A (lógica y visualmente)
    for (let i = numDisks; i >= 1; i--) {
        const disk = document.createElement('div');
        disk.id = `disk-${i}`;
        disk.classList.add('disk', `disk-${i}`); // Añadir clases para estilos y ancho
        // Ya no establecemos el ancho aquí si lo hacemos por clase CSS

        areaJuego
      .appendChild(disk);
        discos[disk.id] = disk; // Guardar referencia al elemento DOM

        // Añadir el disco a la pila lógica de la varilla A
        pegPositions.A.disks.push(disk.id);
        // Actualizar su posición visual inicial
        // Esperamos un pequeño timeout para que el DOM se haya renderizado con el ancho del disco
        // y así offsetWidth sea correcto.
        setTimeout(() => {
            updateDiskPosition(disk, 'A', pegPositions.A.disks.indexOf(disk.id));
        }, 0);
    }

    // Ajustar la velocidad de la animación en el CSS (variable)
    velocidad = parseInt(speedRangeInput.value);
    document.documentElement.style.setProperty('--animation-speed', `${velocidad}ms`);
}

/**
 * Función para mover un disco visualmente con transición CSS.
 *
 * @param {string} idDisco El ID del disco a mover.
 * @param {string} fromPegName El nombre de la varilla de origen.
 * @param {string} toPegName El nombre de la varilla de destino.
 * @param {number} currentStackIndexFrom El índice del disco en la pila de origen (para levantar).
 * @param {number} targetStackIndexTo El índice que tendrá el disco en la pila de destino (para descender).
 */
async function animateMove(idDisco, fromPegName, toPegName, currentStackIndexFrom, targetStackIndexTo) {
    const diskElement = discos[idDisco];
    if (!diskElement) return;

    const diskHeight = diskElement.offsetHeight; // Altura real del disco
    const currentPegX = pegPositions[fromPegName].x;
    const targetPegX = pegPositions[toPegName].x;

    // 1. Fase de levantamiento: Mover el disco hacia arriba desde la varilla de origen
    // La altura a la que se levanta es por encima de todas las varillas
    const liftY = areaJuego
  .offsetHeight - (diskHeight / 2) - 10; // Cerca del tope del game-area

    diskElement.style.left = `${currentPegX - (diskElement.offsetWidth / 2)}px`; // Asegurar que esté centrado en su varilla actual
    diskElement.style.bottom = `${liftY}px`; // Subir el disco

    await new Promise(resolve => setTimeout(resolve, velocidad)); // Esperar la animación de subida

    // 2. Fase de movimiento horizontal: Mover el disco a la X de la varilla de destino
    diskElement.style.left = `${targetPegX - (diskElement.offsetWidth / 2)}px`; // Moverlo horizontalmente manteniendo la altura

    await new Promise(resolve => setTimeout(resolve, velocidad)); // Esperar la animación horizontal

    // 3. Fase de descenso: Mover el disco a su posición final en la varilla de destino
    const finalY = getDiskYPosition(targetStackIndexTo); // Calcular la posición final basada en la pila
    diskElement.style.bottom = `${finalY}px`; // Bajar el disco a su lugar final

    await new Promise(resolve => setTimeout(resolve, velocidad)); // Esperar la animación de bajada
}


/**
 * Algoritmo de las Torres de Hanói recursivo que encola los movimientos.
 * Los nombres de las varillas aquí son simplemente 'A', 'B', 'C'.
 * Esta función manipula las pilas lógicas (pegPositions[].disks) y encola los movimientos.
 *
 * @param {number} n El número de discos a mover.
 * @param {string} origen El nombre de la varilla de origen (e.g., 'A').
 * @param {string} auxiliar El nombre de la varilla auxiliar (e.g., 'B').
 * @param {string} destino El nombre de la varilla de destino (e.g., 'C').
 */
function torresDeHanoiRecursive(n, origen, auxiliar, destino) {
    if (n === 1) {
        // Obtener el ID del disco que está en la cima de la pila de origen
        const idDisco = pegPositions[origen].disks.pop(); // Quitar de la pila lógica de origen
        const targetStackIndexTo = pegPositions[destino].disks.length; // Index donde irá en destino
        pegPositions[destino].disks.push(idDisco); // Añadir a la pila lógica de destino
        moveQueue.push({ idDisco: idDisco, fromPeg: origen, toPeg: destino,
                         currentStackIndexFrom: pegPositions[origen].disks.length, // Indice antes de mover
                         targetStackIndexTo: targetStackIndexTo }); // Indice en la pila destino
    } else {
        // Mover n-1 discos de origen a auxiliar, usando destino
        torresDeHanoiRecursive(n - 1, origen, destino, auxiliar);

        // Mover el disco n (el más grande restante) del origen al destino
        const idDisco = pegPositions[origen].disks.pop();
        const targetStackIndexTo = pegPositions[destino].disks.length;
        pegPositions[destino].disks.push(idDisco);
        moveQueue.push({ idDisco: idDisco, fromPeg: origen, toPeg: destino,
                         currentStackIndexFrom: pegPositions[origen].disks.length,
                         targetStackIndexTo: targetStackIndexTo });

        // Mover n-1 discos de auxiliar a destino, usando origen
        torresDeHanoiRecursive(n - 1, auxiliar, origen, destino);
    }
}

// Función para ejecutar los movimientos en cola con animaciones
async function executeMoves() {
    isAnimating = true;
    solveButton.disabled = true;
    resetButton.disabled = true;
    cantidadDiscos.disabled = true;
    speedRangeInput.disabled = true;

    for (let i = 0; i < moveQueue.length; i++) {
        const move = moveQueue[i];
        messageDisplay.textContent = `Movimiento ${i + 1} de ${moveQueue.length}: Moviendo ${move.idDisco} de ${move.fromPeg} a ${move.toPeg}`;
        await animateMove(move.idDisco, move.fromPeg, move.toPeg, move.currentStackIndexFrom, move.targetStackIndexTo);
    }

    messageDisplay.textContent = `¡Juego completado en ${moveQueue.length} movimientos!`;
    isAnimating = false;
    solveButton.disabled = false;
    resetButton.disabled = false;
    cantidadDiscos.disabled = false;
    speedRangeInput.disabled = false;
}

// --- Event Listeners ---

resetButton.addEventListener('click', initializeGame);

solveButton.addEventListener('click', () => {
    if (isAnimating) return; // No iniciar si ya está animando

    // Resetear las posiciones lógicas de los discos para que el algoritmo los recalcule
    // y se genere la cola de movimientos desde cero.
    // Necesitamos reconstruir el estado inicial de las varillas lógicas
    // antes de llamar a torresDeHanoiRecursive
    pegPositions.A.disks = [];
    pegPositions.B.disks = [];
    pegPositions.C.disks = [];
    for (let i = numDisks; i >= 1; i--) {
        pegPositions.A.disks.push(`disk-${i}`); // Llenar la pila lógica de A
    }

    moveQueue = []; // Limpiar cola de movimientos anterior

    // Llamar al algoritmo recursivo para llenar la cola de movimientos
    torresDeHanoiRecursive(numDisks, 'A', 'B', 'C');
    executeMoves(); // Iniciar la ejecución de las animaciones
});

cantidadDiscos.addEventListener('change', initializeGame); // Reiniciar al cambiar el número de discos
speedRangeInput.addEventListener('input', (event) => {
    velocidad = parseInt(event.target.value);
    document.documentElement.style.setProperty('--animation-speed', `${velocidad}ms`);
});

// Inicializar el juego al cargar la página
document.addEventListener('DOMContentLoaded', initializeGame);

// Recalcular posiciones al cambiar el tamaño de la ventana (para mantener el centrado)
window.addEventListener('resize', () => {
    if (!isAnimating) { // Solo recalcular posiciones si no hay animación en curso
        calculatePegPositions();
        // Reposicionar los discos existentes a su estado actual
        for (const pegName in pegPositions) {
            pegPositions[pegName].disks.forEach((idDisco, index) => {
                updateDiskPosition(discos[idDisco], pegName, index);
            });
        }
    }
});