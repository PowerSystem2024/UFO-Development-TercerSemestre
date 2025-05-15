from dominio.Pelicula import Pelicula
from servicio.CatalogoPeliculas import CatalogoPeliculas

opcion = None

while opcion != 4:
    print('Opciones:')
    print('1. Agregar película')
    print('2. Listar películas')
    print('3. Eliminar archivo de películas')
    print('4. Salir')

    try:
        opcion = int(input('Escribe tu opción (1-4): '))

        if opcion == 1:
            nombre = input('Nombre de la película: ')
            pelicula = Pelicula(nombre)
            CatalogoPeliculas.agregar_pelicula(pelicula)
        elif opcion == 2:
            CatalogoPeliculas.listar_peliculas()
        elif opcion == 3:
            CatalogoPeliculas.eliminar()
        elif opcion == 4:
            print('Saliendo del programa...')
        else:
            print('Opción incorrecta.')
    except ValueError:
        print("Por favor, ingresa un número válido.")
