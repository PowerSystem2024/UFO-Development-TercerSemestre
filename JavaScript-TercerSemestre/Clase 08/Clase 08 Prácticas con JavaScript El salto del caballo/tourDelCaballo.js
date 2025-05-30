// Algoritmo del Salto del Caballo con backtracking
// Grupo: UFO-Development
// Profesor: Ariel Betancud
// Fecha: 26 de mayo de 2025

const TAMANIO = 8; // El tablero es de 8x8
let tablero = Array.from({ length: TAMANIO }, () => Array(TAMANIO).fill(-1));

// Movimientos posibles del caballo (x, y)
const movimientosX = [2, 1, -1, -2, -2, -1, 1, 2];
const movimientosY = [1, 2, 2, 1, -1, -2, -2, -1];

// Elementos del DOM
const boardContainer = document.getElementById('board-container');
const messageElement = document.getElementById('message');
const startButton = document.getElementById('startButton');

// Velocidad de la animación (en milisegundos)
const VELOCIDAD_ANIMACION = 1; // Puedes ajustar este valor: 50ms para rápido, 200ms para más lento

// Función de retraso para la animación
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Verifica si el caballo puede moverse a esa casilla
function puedeMoverse(x, y) {
    return (
        x >= 0 &&
        y >= 0 &&
        x < TAMANIO &&
        y < TAMANIO &&
        tablero[x][y] === -1
    );
}

// Actualiza visualmente una celda
async function actualizarCeldaVisual(x, y, paso, type) {
    const cell = document.getElementById(`cell-${x}-${y}`);
    cell.innerText = paso === -1 ? '' : paso.toString().padStart(2, '0');

    // Limpiar clases de estado anteriores
    cell.classList.remove('current-step', 'backtracking-cell', 'visited-cell', 'solution-cell');

    if (type === 'current') {
        cell.classList.add('current-step');
    } else if (type === 'visited') {
        cell.classList.add('visited-cell');
    } else if (type === 'backtracking') {
        cell.classList.add('backtracking-cell');
    } else if (type === 'solution') {
        cell.classList.add('solution-cell');
    }
    await sleep(VELOCIDAD_ANIMACION);
}

// Intenta buscar un camino válido usando backtracking con visualización
async function buscarCamino(x, y, paso) {
    // Si ya dimos todos los pasos, terminamos
    if (paso === TAMANIO * TAMANIO) {
        return true;
    }

    // Probamos los 8 posibles movimientos desde la posición actual
    for (let i = 0; i < 8; i++) {
        const siguienteX = x + movimientosX[i];
        const siguienteY = y + movimientosY[i];

        if (puedeMoverse(siguienteX, siguienteY)) {
            tablero[siguienteX][siguienteY] = paso; // Anotamos el paso

            // Resaltar la celda como paso actual
            await actualizarCeldaVisual(siguienteX, siguienteY, paso, 'current');

            // Llamada recursiva
            if (await buscarCamino(siguienteX, siguienteY, paso + 1)) {
                return true; // Si llegamos a una solución, salimos
            }

            // Si la llamada recursiva no encontró solución, hacemos backtracking
            tablero[siguienteX][siguienteY] = -1; // Deshacemos el paso

            // Resaltar la celda como backtracking
            await actualizarCeldaVisual(siguienteX, siguienteY, -1, 'backtracking'); // -1 para borrar el número
            // La celda volverá a su color base después de un tiempo gracias a la transición CSS
        }
    }

    // Si ningún movimiento fue válido desde esta posición, devolvemos false
    return false;
}

// Inicializa el tablero visualmente (sin pasos)
function inicializarTableroHTML() {
    boardContainer.innerHTML = ''; // Limpiar cualquier tablero anterior
    const table = document.createElement('table');
    table.id = 'knightBoard'; // Añadir un ID para fácil acceso

    for (let fila = 0; fila < TAMANIO; fila++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < TAMANIO; col++) {
            const td = document.createElement('td');
            td.id = `cell-${fila}-${col}`; // ID único para cada celda
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    boardContainer.appendChild(table);
}

// Función principal para empezar el recorrido animado
async function empezarRecorridoAnimado() {
    startButton.disabled = true; // Deshabilitar el botón durante la animación
    messageElement.innerText = "Buscando solución, observando el backtracking...";
    messageElement.className = 'message-box'; // Limpiar clases anteriores

    // Reiniciar el tablero lógico
    tablero = Array.from({ length: TAMANIO }, () => Array(TAMANIO).fill(-1));
    inicializarTableroHTML(); // Mostrar el tablero vacío al inicio

    tablero[0][0] = 0; // El caballo empieza en la esquina (0,0)
    await actualizarCeldaVisual(0, 0, 0, 'start-cell'); // Marcar la celda inicial

    const solucionEncontrada = await buscarCamino(0, 0, 1);

    if (solucionEncontrada) {
        messageElement.innerText = "¡Solución encontrada! Presiona 'Iniciar' para verla de nuevo.";
        messageElement.classList.add('solution-found');

        // Una vez encontrada la solución, resaltamos el camino final
        for (let fila = 0; fila < TAMANIO; fila++) {
            for (let col = 0; col < TAMANIO; col++) {
                const cell = document.getElementById(`cell-${fila}-${col}`);
                cell.classList.remove('current-step', 'backtracking-cell', 'visited-cell'); // Limpiar estados temporales
                cell.classList.add('solution-cell');
                cell.innerText = tablero[fila][col].toString().padStart(2, '0');
            }
        }
        document.getElementById(`cell-0-0`).classList.add('start-cell'); // Asegurar que la celda inicial sigue siendo verde
    } else {
        messageElement.innerText = "No se encontró una solución.";
        messageElement.classList.add('no-solution');
    }
    startButton.disabled = false; // Habilitar el botón de nuevo
}

// Event listener para el botón de inicio
document.addEventListener('DOMContentLoaded', () => {
    inicializarTableroHTML(); // Muestra el tablero vacío al cargar la página
    document.getElementById(`cell-0-0`).classList.add('start-cell'); // Marcar la celda de inicio
    startButton.addEventListener('click', empezarRecorridoAnimado);
});