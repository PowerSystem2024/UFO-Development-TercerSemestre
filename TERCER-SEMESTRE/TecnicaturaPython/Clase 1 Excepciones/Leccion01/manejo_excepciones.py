# Los bloques try y except se usan para manejar errores o excepciones que pueden ocurrir durante la ejecución del programa
# En lugar de que el programa se corte si pasa algo inesperado (por ejemplo, dividir por cero), con try-except podés
# capturar el error y seguir funcionando, mostrando un mensaje al usuario o tomando otra acción.

# Estructura básica:
# try:
#     Código que puede fallar
#     ...
# except:
#     Código que se ejecuta si hubo un error
#     ...

# try:
#     10/0
# except Exception as e:
#     print(f'Ocurrio un error: {e}')

# *************************************************************************************
# Un while un poco anticuado....

num2 = 0
num1 = int(input("Ingresa numero1: "))

while num2 == 0:
    num2 = int(input("Ingresa numero2: "))
    try:
        resultado = num1 / num2 # Linea que puede fallar
    except Exception as e:
        print(f'No se puede hacer una {e} por favor, modifique el valor de numero2')

print(f"El resultado es: {resultado}")
# *************************************************************************************  

# Los casos posibles del bloque try - except
try:
    numerador = int(input("Ingresa el numerador: "))
    denominador = int(input("Ingresa el denominador: "))

    resultado = numerador / denominador
    print(f'El resultado es: {resultado}')

except ZeroDivisionError:
    print('Error, no se puede dividir por cero!')

except ValueError:
    print('Error, tenes que ingresar números enteros!')

except Exception as e:
    print(f'Ocurrio un error inesperado: {e}')

# ************************************************************************************* 

# ✅ 1. Mejorar el código para que el usuario pueda volver a intentar si se equivoca
# Podemos usar un bucle while que se repita hasta que el usuario haga bien la operación. Solo salimos del bucle cuando la división se haga correctamente.

# 💡 Código mejorado con reintento:
while True:
    try:
        numerador = int(input("Ingresá el numerador: "))
        denominador = int(input("Ingresa el denominador: "))

        resultado = numerador / denominador
        print(f"El resultado es: {resultado}")
        break # Salimos del bucle si todo salió bien

    except ZeroDivisionError:
        print("⚠️ ¡Error! No se puede dividir por cero. Probá de nuevo.")

    except ValueError:
        print("⚠️ ¡Error! Tenés que ingresar solo números enteros. Probá de nuevo.")

# *************************************************************************************

# ✅ 2. Uso de else y finally con try
# else: se ejecuta solo si no hubo errores en el try.

# finally: se ejecuta siempre, haya o no error. Se usa para cerrar archivos, liberar recursos, o mostrar mensajes finales.

# 💡 Ejemplo con else y finally:

while True:
    try:
        numerador = int(input("Ingresá el numerador: "))
        denominador = int(input("Ingresá el denominador: "))
        resultado = numerador / denominador

    except ZeroDivisionError:
        print("⚠️ ¡Error! No se puede dividir por cero.")
        continue

    except ValueError:
        print("⚠️ ¡Error! Ingresaste algo que no es número entero.")
        continue

    else:
        print(f"✅ El resultado es: {resultado}")
        break  # Salimos si todo salió bien

    finally:
        print("👉 Intento finalizado.\n")


while True:
    try:
        nummera = int(input("Ingrese otro numerador: "))
        dennomi = int(input("Ingrese otro denominador: "))
        ressult = nummera / dennomi

    except ZeroDivisionError:
        print("La división por cero no está permitida!")
        continue

    except ValueError:
        print("Ingresaste algo que no es un Nro. entero...")
        continue
    
    except Exception as e:
        print(f"Ocurrio un error inesperado del tipo {e}")
        continue

    else:
        print(f"El resultado es: {ressult}")
        break # Una vez que el resultado es el correcto finalizamos el ciclo while

    finally:
        print("Intento Recontra Finalizado!! \n")
        


