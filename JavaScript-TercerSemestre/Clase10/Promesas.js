let miPromesa = new Promise((resolved, rejected) => {      //resolved = resolver  rejected = rechazar
    let expresion = false;
    if (expresion) {
        resolved('Resolvió correcto');
    } else {
        rejected('Se produjo un error');
    }
});

miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);

