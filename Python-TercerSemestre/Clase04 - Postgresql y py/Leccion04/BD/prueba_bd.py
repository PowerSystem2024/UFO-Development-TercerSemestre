import psycopg2 # esto esx para poder conectarnos a Postgre
conexion = psycopg2.connect(
    user="postgres",
    password="admin",
    host='127.0.0.1',
    port="5432",
    database='prueba_bd',
)

cursor = conexion.cursor()
sentencia ='SELECT * FROM persona'
cursor.execute(sentencia) # DE ESTA MANERA EJECUTAMOS LA SETENCIA
registros = cursor.fetchall() # RECUPERAMOS TODOS LOS REGISTROS QUE SERAN UNA LISTA
print(registros)

cursor.close()
conexion.close()