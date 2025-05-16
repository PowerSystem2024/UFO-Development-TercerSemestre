package test;

import domain.*;

public class TestConversionObjetos {
    public static void main(String[] args) {
        Empleado empleado;
        empleado = new Escritor("Juan", 5000, TipoEscritura.CLASICO);
        //System.out.println("empleado = " + empleado);
        //System.out.println(empleado.obtenerDetalles()); // Si queremos acceder a métodos de Escritor
        //empleado.getTipoEscritura(); No se puede hacer 
        // Downcasting
        // Opción 1 (directa):
        Escritor escritor = (Escritor)empleado;
        escritor.getTipoEscritura();
        // Opción 2 (asignando a una variable del tipo específico):
        //Escritor escritor = (Escritor)empleado;
        //escritor.getTipoEscritura();
        
        // Upcasting
        Empleado empleado2 = escritor;
        System.out.println(empleado2.obtenerDetalles());
    }
}
