#cuando el archivo esta en una carpeta distinta tenemos que colocar la ruta
# por ejemplo C:\\disco c\\prueba.txt
archivo = open('prueba.txt', 'r', encoding="utf8") #r read leer
#print(archivo.read())
#print(archivo.read(15)) #lee solo las primeras 15 letras
#print(archivo.read(11))
#print(archivo.readline()) #hace un salto de linea
#print(archivo.readline())

#vamnos a iterar el archivo, cada una de las lineas
#for linea in archivo:
    #print(linea) #iteramos todos los elementos del archivo
#print(archivo.readlines()[11])  # accedemos al archivo como si una lista
# con el corchete lo que hacemos es que nos muestre solo ese elemnto osea fila 11
# las letras son "r", read, "w" write, "a" append, x
# "a" lo que hace es anexar mas informacion a un archivo existente, sin borrar lo que ya tiene

#anexamos informacion, copiamos a otro
archivo2= open("copia.txt", "w", encoding="utf8")
archivo2.write(archivo.read())
archivo.close() #cerramos el primer archivo
archivo2.close() # cerramos el segundo archivo

print("se ha terminado el proceso de leer y copiar los archivos")