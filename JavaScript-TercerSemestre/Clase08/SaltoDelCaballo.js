// Algoritmo del Salto del Caballo con backtracking
// Grupo: UFO-Development
// Profesor: Ariel Betancud
// Fecha: 26 de mayo de 2025

const TAMANIO = 8; // El tablero es de 8x8
let tablero = Array.from({ length: TAMANIO }, () => Array(TAMANIO).fill(-1));

// Movimientos posibles del caballo (x, y)
const movimientosX = [2, 1, -1, -2, -2, -1, 1, 2];
const movimientosY = [1, 2, 2, 1, -1, -2, -2, -1];

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

// Intenta buscar un camino válido usando backtracking
function buscarCamino(x, y, paso) {
  // Si ya dimos todos los pasos, terminamos
  if (paso === TAMANIO * TAMANIO) return true;

  // Probamos los 8 posibles movimientos desde la posición actual
  for (let i = 0; i < 8; i++) {
    const siguienteX = x + movimientosX[i];
    const siguienteY = y + movimientosY[i];

    if (puedeMoverse(siguienteX, siguienteY)) {
      tablero[siguienteX][siguienteY] = paso; // Anotamos el paso

      if (buscarCamino(siguienteX, siguienteY, paso + 1)) {
        return true; // Si llegamos a una solución, salimos
      }

      // Si no funcionó, volvemos atrás (backtracking)
      tablero[siguienteX][siguienteY] = -1;
    }
  }

  // Si ningún movimiento fue válido, devolvemos false
  return false;
}

// Función principal para empezar el recorrido del caballo
function empezarRecorrido() {
  tablero[0][0] = 0; // El caballo empieza en la esquina (0,0)

  if (buscarCamino(0, 0, 1)) {
    mostrarRecorrido();
  } else {
    console.log("No se encontró una solución.");
  }
}

// Muestra el tablero con los pasos del caballo
function mostrarRecorrido() {
  console.log("Recorrido del caballo:");
  for (let fila = 0; fila < TAMANIO; fila++) {
    let linea = "";
    for (let col = 0; col < TAMANIO; col++) {
      linea += tablero[fila][col].toString().padStart(2, '0') + " ";
    }
    console.log(linea);
  }
}

// Ejecutamos el algoritmo
empezarRecorrido();
