/*
Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
ejemplo:
input: 15 , 3
Output: El 15 es el número más grande 
*/
const numero1 = parseInt(prompt('Ingresa algun numero'))
const numero2 = parseInt(prompt('Ingresa un segundo numero'))

if (numero1 > numero2){
    document.write('El'+ numero1 +'es el numero mas grande')
}
else if(numero2 > numero1){
    document.write('El'+ numero2 +'es el numero mas grande')
}
else{document.write('Los dos numeo son iguales')}