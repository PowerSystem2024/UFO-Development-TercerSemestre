from NumerosIgualesException import NumerosIgualesException

resultado = None


try:
    a = int(input("Introduce el primer numero: "))
    b = int(input("Introduce el segundo numero: "))
    if a == b:
        raise NumerosIgualesException("Son numeros iguales")
    resultado = a / b  #modificamos

except TypeError as e:
    print(f"TypeError - Ocurrio un error {type(e)}")
except ZeroDivisionError as e:
    print(f"ZeroDivisionError - Ocurrio un error: {type(e)}")
except Exception as e:
    print(F"Excepcion - Ocurrio un error : {type(e)}")
else:
    print("No se se arrojo ninguna excepcion")
finally: #siempre se va a ejecutar
    print("Ejecucion de este bloque finally")

print(f"Resultado es: {resultado}")
print("seguimos . . .")