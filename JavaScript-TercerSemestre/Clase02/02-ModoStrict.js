//"use strict";
// En modo estricto, no se permite el uso de variables no declaradas
// Esto lanzará un error porque 'x' no está declarado
let x = 10; 
console.log(x); // Esto no se ejecutará porque el error anterior detiene la ejecución

function miFuncion() {
     "use strict";
    let y = 10; 
    console.log(y); 
}
miFuncion(); 
