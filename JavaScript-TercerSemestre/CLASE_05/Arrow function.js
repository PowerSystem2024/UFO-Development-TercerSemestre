


function miFuncion() {
    console.log("Saludo desde una funcion");
}

miFuncion();

let myfuncion = function () {
    console.log("Saludo desde una funcion anonima");
}

//Ahora vamos a crear una funcion de flecha
let miFuncionFlecha = () => {
    console.log("Saludo desde una funcion de flecha");
}

miFuncionFlecha();


const saludar = () => console.log("Saludo a todos desde esta funcion de flecha");

saludar();

const saludar2 = () => {
    return "Saludo desde la funcion flecha dos";
}

console.log(saludar2);

const saludar3 = () => "Saludo desde la funcion flecha tres";

console.log(saludar3);

const regresaObjeto = () => ({nombre: "Juan", apellido: "Perez"});

console.log(regresaObjeto());

const funcionParametro = ( mensaje ) => console.log( mensaje );

funcionParametro("Saludos desde esta funcion con parametros");

const funcionParametrosClasica = function( mensaje ){
    console.log( mensaje );
}

funcionParametrosClasica("Saludos desde la funcion clasica");

const funcionConParametros = mensaje => console.log( mensaje );

funcionConParametros("Otra forma de trabajar con funcion flecha");

const funcionConParametros2 = (op1, op2) => {
    let resultado = op1 + op2;
    return resultado;
}

console.log(funcionConParametros2(3, 5));