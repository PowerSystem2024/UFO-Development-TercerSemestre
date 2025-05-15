'use strict'
// Veamos como evitar este error
try {
    x = 10; // Lo traemos con ALT + flecha hacia arriba o hacia abajo
    miFuncion(); // Llamamos a una funcion que no existe
    throw 'Mi Error';
}
catch (error) {
    console.log (typeof(error)); // cachamos el error
}
finally {
    console.log('Termina la revision del error'); // Esto se ejecuta siempre
}
console.log('Continuamos...'); // Esto no se llaga ver porque esta bloqueado por el error anterior

let resultado = -5;

try {
    y = 5;
    if( isNaN(resultado)) throw' no es un numero';
    else if (resultado === '') throw 'es un string vacio';
    else if (resultado >= 0) throw 'es un numero positivo';
    else if (resultado < 0) throw 'es un numero negativo';
    else resultado = 'No es un numero';
}
catch (error) {
    console.log(error); 
    console.log(error.name);
    console.log(error.mensage);
}
finally {
    console.log('Termina la revision del error 2');

}