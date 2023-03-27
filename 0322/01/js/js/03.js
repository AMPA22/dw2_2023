//Generar un arreglo con los números pares entre 1 y un número dado. En esta actividad se trabajará con arreglos y 
//estructuras de repetición para generar un arreglo con todos los números pares entre 1 y un número dado.
function contarPares(nros, i) {
    if (nros instanceof Array) {
        if (typeof i === 'number' && Number.isInteger(i)) {
            nros.sort();
            let contadorPares = 0;
            for(let i = 0; i < nros.length; ++i) {
                if (nros[i] % 2 === 0 && nros[i] <= i) {
                    ++contadorPares;
                    if (nros[i] === i) {
                        break;
                    }
                }
            }
            return contadorPares;
        }
}
}
try {
    console.log(contarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));
} catch (e) {
    console.log(Error: ${e.message});
}
console.log();