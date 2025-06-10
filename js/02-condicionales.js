// Estructura condicional
/*
if(condicion logica) {
todas las lineas de codigo que quiero que el programa haga si se cumple la condicion}
*/

//Estructura condicional doble

/*
if(condicion logica) {
todas las lineas de codigo que quiero que el programa haga si se cumple la condicion}


else {
todas las lineas de codigo que quiero que el programa haga si no se cumple la condicion}

 */

//Esctuctura condicional con else-if

/*
if(condicion logica){
todas las lineas de codigo que quiero que el programa haga si no se cumple la condicion}

else -if (conicional 2){
todas las lineas de codigo que quiero que el programa haga si no se cumple la condicion 1, pero si la condicion 2}

else (){
todas las lineas de codigo que quiero que el programa haga si no se cumple la condicion 2}
*/

const edad = parseInt(prompt('Ingresa tu edad'))
console.log(edad)
//si la edad esta entre 0 y 110 años
//&& and
// || or
if(edad > 0 && edad < 110){
    if(edad > 18){
    alert('Sos mayor de edad')
    }
    else {
    alert('Sos menor de edad')
    }
}else{
    alert('Valor erroneo')
}



