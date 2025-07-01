/*
En Java, una interface es un tipo de referencia que define un contrato: 
es decir, un conjunto de métodos que una clase debe implementar. 
Las interfaces se utilizan para lograr abstracción total y polimorfismo, 
y permiten definir el comportamiento común 
que puede ser compartido por clases no relacionadas.
 */

/**
 *
 * @author Dario Benitez
 */

/*
✅ ¿Qué es una interfaz en Java?
Una interface:
No tiene implementación (aunque desde Java 8 puede tener métodos default y static con cuerpo).
No puede tener atributos de instancia (solo constantes públicas static final).
Se implementa en una clase mediante la palabra clave implements.

💡 Ejemplo práctico
Supongamos que queremos un sistema que controle distintos tipos de vehículos. Todos deben poder arrancar y detenerse, pero su implementación concreta puede variar.

1. Definimos la interfaz:

public interface Vehiculo {
    void arrancar();
    void detener();
}

2. Creamos clases que implementan la interfa

public class Auto implements Vehiculo {
    public void arrancar() {
        System.out.println("El auto arranca con llave.");
    }

    public void detener() {
        System.out.println("El auto se detiene usando frenos.");
    }
}


public class Bicicleta implements Vehiculo {
    public void arrancar() {
        System.out.println("La bicicleta comienza a pedalear.");
    }

    public void detener() {
        System.out.println("La bicicleta frena con las manetas.");
    }
}


3. Probamos todo en el main:

public class Main {
    public static void main(String[] args) {
        Vehiculo auto = new Auto();
        Vehiculo bici = new Bicicleta();

        auto.arrancar();
        auto.detener();

        bici.arrancar();
        bici.detener();
    }
}


🆚 Diferencias entre interface y clase abstracta
Característica	Interface	Clase Abstracta
Métodos	Solo métodos abstractos (excepto default y static)	Puede tener métodos abstractos y concretos
Herencia	Una clase puede implementar múltiples interfaces	Una clase solo puede extender una clase abstracta
Campos	Solo public static final (constantes)	Puede tener atributos normales
Constructor	No puede tener	Sí puede tener
Nivel de abstracción	100% abstracta (antes de Java 8)	Puede ser parcialmente abstracta
Ideal para	Definir comportamientos	Definir jerarquías de clases

📝 Cuándo usar cada uno:
Usa interfaces cuando varias clases no relacionadas necesitan el mismo comportamiento (por ejemplo, Comparable, Serializable).

Usa clases abstractas cuando tienes una jerarquía lógica (por ejemplo, Animal, Empleado) y métodos comunes ya implementados.
*/
package accesodatos;


public interface IAccesoDatos {
    int MAX_REGISTRO = 10;
    
    // Metodo insertar es abstracto y sin cuerpo
    void insertar();
    
    void listar();
    
    void actualizar();
    
    void eliminar();
}
