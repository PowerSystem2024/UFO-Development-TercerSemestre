import java.util.Scanner;
public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true) {
            //Mostramos el menu
            mostrarMenu();
            System.out.print("¿Operacion a realizar?: ");
            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {
                    ejecutarOperacion(operacion, entrada);

                }// Fin del if
                else if (operacion == 5) {
                    System.out.println("Hasta pronto ...");
                    break;// rompe el ciclo y sale
                } else {
                    System.out.println("opcion no valida");
                }
            } catch (Exception e) { // Fin de try, comienzo del catch
                System.out.println("Ocurrio un error: " + e.getMessage());

            }// Fin del catch

            // imprimimos un salto de linea antes de repetir el menu
            System.out.println();
        }//Fin While
    }// Fin main

    private static void mostrarMenu (){

        System.out.println("******* Aplicacion Calculadora *******");
        //Mostramos el menu
        System.out.println("""
                    1. Suma
                    2. Resta
                    3. Multiplicacion
                    4. Division
                    5. Salir
                    """);
    } // Fin metodo mostrarMenu

    private  static void ejecutarOperacion(int operacion,Scanner entrada){
        System.out.print("Digite el valor para el operando 1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Digite el valor para el operando 2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());

        Double resultado;
        switch (operacion) {
            case 1 -> { // Suma
                resultado = operando1 + operando2;
                System.out.println("El resultado de la suma es: " + resultado);
            }
            case 2 -> { // resta
                resultado = operando1 - operando2;
                System.out.println("El resultado de la resta es: " + resultado);
            }
            case 3 -> { // multiplicacion
                resultado = operando1 * operando2;
                System.out.println("El resultado de la multiplicacion es: " + resultado);
            }
            case 4 -> { // division
                resultado = operando1 / operando2;
                System.out.println("El resultado de la division es: " + resultado);
            }
            default -> System.out.println("Operacion no valida" + operacion);
        } //Fin switc

    }// Fin de metodo ejecurarOperacion
} // Fin clase
