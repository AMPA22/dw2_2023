//Reemplazar un valor en un arreglo por otro valor dado. En esta actividad se trabajará con arreglos y estructuras 
//de repetición para reemplazar un valor en un arreglo por otro valor dado.
var nombres=["araceli","milagros"]
console.log(nombres[0]);
nombres.splice(nombres.indexOf("milagros"),1,"jose");
console.log(nombres);