/*
Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo:  
input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2. 
*/
const numero1 = parseInt(prompt('Agrega un numero al azar'))

if(numero1 % 2 === 0) {
    document.write('El ' + numero1 + ' es divisible por 2.');
}
else{
    document.write('El ' + numero1 + ' no es divisible por 2.');
}