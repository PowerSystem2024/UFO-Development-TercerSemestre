# Proyecto MundoPC - Polimorfismo

## Objetivo
Aplicar el concepto de polimorfismo en JavaScript utilizando una jerarquía de clases que simulan un sistema de ventas de computadoras.

## Clases involucradas
- DispositivoEntrada (superclase)
- Raton
- Teclado
- Monitor
- Computadora
- Orden

## ¿Dónde se aplica el polimorfismo?
Cada clase redefine el método `toString()` para mostrar su información.  
Gracias al polimorfismo, la clase `Orden` no necesita saber los detalles internos de cada objeto:  
simplemente invoca `toString()` y cada clase responde con su propia versión.

## ¿Qué hace la clase Orden?
- Agrupa varias computadoras.
- Imprime los detalles de cada una usando polimorfismo.
