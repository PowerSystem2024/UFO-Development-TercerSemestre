
mifuncion1()
mifuncion2()

function mifuncion1(){
    console.log("Funcion 1");
}

function mifuncion2(){
    console.log("Funcion 2");
}


//Funcion de tipo callback
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, functionCallback){
    let res = op1 + op2;
    functionCallback(`Resultado: ${res}`);
}

sumar( 5, 3, imp);

//Llamadas asincronas con uso setTimeout
function mifuncionCallback(){
    console.log("Saludo asincrono despues de 3 segundos");
}

setTimeout(mifuncionCallback, 3000);

setTimeout( function() { console.log("Saludo asincrono 2")}, 4000);

setTimeout( () => console.log("Saludo asincrono 3"), 5000);

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000); // Cada 1 segundo se ejecuta
