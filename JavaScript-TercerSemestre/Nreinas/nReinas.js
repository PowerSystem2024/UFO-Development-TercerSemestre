const N = 8; // Puedes cambiar este valor a 9, 10, etc.

let tablero = Array.from({ length: N }, () => Array(N).fill('.'));
let soluciones = [];
let posicionesReinas = [];

function esSeguro(tablero, fila, col) {
    for (let i = 0; i < fila; i++) {
        if (tablero[i][col] === 'Q') return false;
        if (col - (fila - i) >= 0 && tablero[i][col - (fila - i)] === 'Q') return false;
        if (col + (fila - i) < N && tablero[i][col + (fila - i)] === 'Q') return false;
    }
    return true;
}

function resolver(fila) {
    if (fila === N) {
        soluciones.push(tablero.map(f => [...f]));
        posicionesReinas = tablero.map((fila, i) => fila.indexOf('Q'));
        return;
    }

    for (let col = 0; col < N; col++) {
        if (esSeguro(tablero, fila, col)) {
            tablero[fila][col] = 'Q';
            resolver(fila + 1);
            tablero[fila][col] = '.';
        }
    }
}

resolver(0);

// Mostrar el tablero final
console.log("Tablero con las reinas ubicadas:");
tablero = soluciones[0]; // Tomamos la primera solución válida
tablero.forEach(fila => console.log(fila.join(' ')));

// Mostrar arreglo de posiciones
console.log("\nÍndices de las reinas (columna por fila):");
console.log(posicionesReinas);

// Mostrar el valor de N
console.log(`\nValor de N: ${N}`);
