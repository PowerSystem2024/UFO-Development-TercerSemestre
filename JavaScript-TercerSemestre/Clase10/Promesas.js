// let miPromesa = new Promise((resolved, rejected) => {      //resolved = resolver  rejected = rechazar
//     let expresion = false;
//     if (expresion) {
//         resolved('Resolvió correcto');
//     } else {
//         rejected('Se produjo un error');
//     }
// });

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

// miPromesa
//     .then(valor =>console.log(valor))
//     .catch(error => console.log(error));}

let promesa = new Promise((resolver) => {
    // console.log('Inicio promesa');
    setTimeout(() => resolver('Saludos con promesa, callback, función flecha y setTimeout'), 3000);
    // console.log('Fin promesa');
});

//El llamado a la promesa utilizando setTimeout
// promesa.then(valor => console.log(valor));
// console.log('Fin promesa');

// async indica que una función regresa una promesa
async function miFuncionConPromesa() {
    return 'Saludos con promesa y async';
}
// miFuncionConPromesa().then(valor => console.log(valor));

//async/await
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });
    console.log(await miPromesa);
}
// funcionConPromesaYAwait();

//promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout() {
    let miPromesa = new Promise(resolver => {
        console.log('Inicio de función');
        setTimeout(() => resolver('Promesa con await y timeout'), 3000);
        console.log('Fin de función');
    });
    console.log(await miPromesa);
}

funcionConPromesaAwaitTimeout();


