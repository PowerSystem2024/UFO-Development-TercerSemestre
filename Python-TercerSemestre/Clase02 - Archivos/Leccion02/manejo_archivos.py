# Declaramos una variable
from logging import exception

try:
    archivo = open('prueba.txt','w', encoding="utf8") # La W es de write que significa escribir
    #encoding="utf8" sirve para escribir los acentos
    archivo.write('Programamos con diferentes tipos de archivos en txt.\n') #\n es un salto de linea
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write("como por ejemplo: acción, ejecución y producción\n")
    archivo.write('Con esto terminamos')
except Exception as e:
    print(e)
finally: # siempre se ejecuta
    archivo.close() # con esto se debe cerrar el archivo
#archivo.write("Todo quedo perfecto") esto es un error porque el archivo esta cerrado al ejecutar finally