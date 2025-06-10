/*
Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo:  
input: 15 , 3, 9
Output: El 15 es el número más grande 
*/
alert('Vas a tener que ingresar 3 números segidos');
const numero1 = parseInt(prompt('Ingresa el primer numero'));
const numero2 = parseInt(prompt('Ingresa el segundo numero'));
const numero3 = parseInt(prompt('Ingresa el tercer numero'));

if (numero1 === numero2 && numero2 === numero3) {
    document.write('Los tres números son iguales');
}
else if (numero1 >= numero2 && numero1 >= numero3 && numero2 === numero3) {
    document.write('El ' + numero1 + ' es el número más grande (hay dos menores iguales)');
}
else if (numero1 > numero2 && numero1 > numero3) {
    document.write('El ' + numero1 + ' es el número más grande');
}
else if (numero2 > numero1 && numero2 > numero3) {
    document.write('El ' + numero2 + ' es el número más grande');
}
else if (numero3 > numero1 && numero3 > numero2) {
    document.write('El ' + numero3 + ' es el número más grande');
}
else {
    document.write('Hay al menos dos números iguales y más grandes que el otro');
}