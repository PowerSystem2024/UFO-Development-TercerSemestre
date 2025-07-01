// Simulamos la carga de usuarios con una promesa y un retardo de 2 segundos
function cargarUsuarios() {
    return new Promise((resolver, rechazar) => {
        console.log('Cargando usuarios..');

        // Simulamos una operación asincrónica con setTimeout
        setTimeout(() => {
            const exito = true; // Puede colocarse aquí también false..

            if (exito) {
                resolver(['Ana', 'Luis', 'Maria']); // Esta es la lista de usuarios simulada

            } else {
                rechazar(' Error al cargar los Usuarios.');
            }

        }, 2000);
    });
}

// Aquí la versión con promesa y .then / . catch
cargarUsuarios()
    .then(usuarios => {
        console.log('Usuarios cargados correctamente:');
        console.log(usuarios);
    })
    .catch(error => {
        console.error(error);
    });

// Aquí la versión con async/await
async function mostrarUsuarios() {
    try {
        const usuarios = await cargarUsuarios();
        console.log(' Lista recibida con async/await:');
        console.log(usuarios);
    } catch (error) {
        console.error(' Error desde función async: ', error);
    }
}

// Ahora llamamos a la función async
mostrarUsuarios();
