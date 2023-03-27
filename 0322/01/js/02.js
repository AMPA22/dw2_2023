//Dada una cadena, determinar si es un palíndromo. En esta actividad se trabajará con cadenas y estructuras condicionales
//para determinar si una cadena es un palíndromo (es decir, si se lee igual de izquierda a derecha como de derecha a
//izquierda).
function esPalindromo(text) {
    return text.split('').reverse().join('') == text;
}

console.log(esPalindromo('arenera'));   
console.log(esPalindromo('arañara'));   
console.log(esPalindromo('soñar'));  
console.log(esPalindromo('ojo'));   