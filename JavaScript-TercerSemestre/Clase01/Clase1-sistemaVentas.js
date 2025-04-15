// Clase base
class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
      this.tipoEntrada = tipoEntrada;
      this.marca = marca;
    }
  
    getTipoEntrada() {
      return this.tipoEntrada;
    }
  
    setTipoEntrada(tipoEntrada) {
      this.tipoEntrada = tipoEntrada;
    }
  
    getMarca() {
      return this.marca;
    }
  
    setMarca(marca) {
      this.marca = marca;
    }
  
    toString() {
      return `Tipo Entrada: ${this.tipoEntrada}, Marca: ${this.marca}`;
    }
  }
  
  // Raton hereda de DispositivoEntrada
  class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
  
    constructor(tipoEntrada, marca) {
      super(tipoEntrada, marca);
      this.idRaton = ++Raton.contadorRatones;
    }
  
    toString() {
      return `Raton [ID: ${this.idRaton}], ${super.toString()}`;
    }
  }
  
  // Teclado hereda de DispositivoEntrada
  class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;
  
    constructor(tipoEntrada, marca) {
      super(tipoEntrada, marca);
      this.idTeclado = ++Teclado.contadorTeclados;
    }
  
    toString() {
      return `Teclado [ID: ${this.idTeclado}], ${super.toString()}`;
    }
  }
  
  // Clase Monitor
  class Monitor {
    static contadorMonitores = 0;
  
    constructor(marca, tamano) {
      this.idMonitor = ++Monitor.contadorMonitores;
      this.marca = marca;
      this.tamano = tamano;
    }
  
    getIdMonitor() {
      return this.idMonitor;
    }
  
    toString() {
      return `Monitor [ID: ${this.idMonitor}], Marca: ${this.marca}, Tamaño: ${this.tamano}`;
    }
  }
  
  // Clase Computadora
  class Computadora {
    static contadorComputadoras = 0;
  
    constructor(nombre, monitor, teclado, raton) {
      this.idComputadora = ++Computadora.contadorComputadoras;
      this.nombre = nombre;
      this.monitor = monitor;
      this.teclado = teclado;
      this.raton = raton;
    }
  
    toString() {
      return `
  Computadora [ID: ${this.idComputadora}] - ${this.nombre}
    ${this.monitor.toString()}
    ${this.teclado.toString()}
    ${this.raton.toString()}
      `;
    }
  }
  
  // Clase Orden
  class Orden {
    static contadorOrdenes = 0;
  
    constructor() {
      this._idOrden = ++Orden.contadorOrdenes;
      this._computadoras = [];
    }
  
    agregarComputadora(computadora) {
      this._computadoras.push(computadora);
    }
  
    mostrarOrden() {
      let resultado = `Orden [ID: ${this._idOrden}]\n`;
      this._computadoras.forEach((compu, index) => {
        resultado += `\nComputadora ${index + 1}: ${compu.toString()}\n`;
      });
      return resultado;
    }
  }
  
  // ============================
  // Pruebas
  // ============================
  const raton1 = new Raton("USB", "Logitech");
  const teclado1 = new Teclado("USB", "Redragon");
  const monitor1 = new Monitor("Samsung", "24 pulgadas");
  
  const computadora1 = new Computadora("PC Gamer", monitor1, teclado1, raton1);
  
  const orden1 = new Orden();
  orden1.agregarComputadora(computadora1);
  
  console.log(orden1.mostrarOrden());
  