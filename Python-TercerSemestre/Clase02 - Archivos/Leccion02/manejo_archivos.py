# Declaramos una variable
from logging import exception

try:
    archivo = open('prueba.txt','w') # La W es de write que significa escribir
except Exception as e:
    print(e)
finally: # siempre se ejecuta
    archivo.close() # con esto se debe cerrar el archivo