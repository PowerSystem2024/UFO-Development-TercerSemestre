const N = 8;
const reinas = Array(N).fill(-1);
const tiempoDeEspera = 10; // milisegundos (0.5 segundos)

// Función para esperar entre pasos
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Verifica si es seguro poner una reina
function sePuedePoner(fila, columna) {
  for (let i = 0; i < fila; i++) {
    if (
      reinas[i] === columna ||
      Math.abs(reinas[i] - columna) === Math.abs(i - fila)
    ) {
      return false;
    }
  }
  return true;
}

// Coloca las reinas usando backtracking y mostrando el proceso
async function ponerReinasPasoAPaso(fila) {
  if (fila === N) {
    mostrarArreglo(reinas);
    return true;
  }

  for (let columna = 0; columna < N; columna++) {
    if (sePuedePoner(fila, columna)) {
      reinas[fila] = columna;
      mostrarTablero(reinas);
      await esperar(tiempoDeEspera);

      if (await ponerReinasPasoAPaso(fila + 1)) return true;

      // Backtrack
      reinas[fila] = -1;
      mostrarTablero(reinas);
      await esperar(tiempoDeEspera);
    }
  }

  return false;
}

// Dibuja el tablero con las reinas actuales
function mostrarTablero(arregloReinas) {
  const tableroHTML = document.getElementById("tablero");
  tableroHTML.innerHTML = "";
  tableroHTML.style.gridTemplateColumns = `repeat(${N}, 40px)`;

  for (let fila = 0; fila < N; fila++) {
    for (let columna = 0; columna < N; columna++) {
      const casilla = document.createElement("div");
      casilla.classList.add("casilla");

      if ((fila + columna) % 2 === 0) {
        casilla.classList.add("blanca");
      } else {
        casilla.classList.add("negra");
      }

      if (arregloReinas[fila] === columna) {
        casilla.textContent = "♛";
        casilla.classList.add("reina");
      }

      tableroHTML.appendChild(casilla);
    }
  }
}

// Muestra el arreglo de posiciones final
function mostrarArreglo(arregloReinas) {
  document.getElementById("posiciones").textContent = JSON.stringify(arregloReinas);
}

// Ejecutar automáticamente al cargar la página
ponerReinasPasoAPaso(0);
