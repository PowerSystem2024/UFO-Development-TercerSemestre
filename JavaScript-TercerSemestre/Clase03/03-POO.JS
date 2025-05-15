class Empleado {
    constructor(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obternerDetalles() {
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}
class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obternerDetalles() {
        return `Gerente: ${super.obternerDetalles()}, departamento: ${this._departamento}`;
    }
}

function imprimir (tipo){
    console.log(tipo.obternerDetalles());
    if(tipo instanceof Gerente){
        console.log("Es un gerente");
        console.log(tipo._departamento);
    }
     else if(tipo instanceof Empleado){
         console.log("Es un objeto de tipo empleado");
         console.log(tipo._departamento);//no existe en la clase padre
 }
    else if(tipo instanceof Object){ //el ordeb suenore es jerarquico
        console.log("Es un objeto de tipo Object");// clase padre de todas las clases
    }
}
let Gerente1 = new Gerente("Juan", 5000, "Sistemas");
console.log(Gerente1); //objeto de la clase hija

let Empleado1 = new Empleado("Pedro", 3000);
console.log(Empleado1); //objeto de la clase padre

imprimir(Gerente1);
imprimir(Empleado1);