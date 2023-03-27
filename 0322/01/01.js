//Suma de todos los números en un arreglo.  En esta actividad se trabajará con arreglos y una estructura de 
//repetición para sumar todos los números en una lista.
var nros = [1,2,3,4,5,6,7,8,9,10], sum=0;
    nros.forEach(function(nro){
        sum= sum+nro;
        return sum;
    })
    console.log(sum);