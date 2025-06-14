//Estructura de repeticion
//tupos de bucles: whike, for, do-while
//while - mientras siempre se cumpla la condicion
/*
while(condicion logica)
    todas las lienas de codigo que quiero repetir varias veces
    agregar alguna linas que haga que la conducion logica se deje de cumplir en algun momento
*/

let renglon = 1;
while(renglon <= 50){
    document.writeln(`<p>renglon ${renglon}</p>`)
    renglon++  //renglon = renglon + 1

}

//do-while