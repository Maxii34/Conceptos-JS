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
    document.writeln(`<p class="btn btn-primary">renglon ${renglon}</p>`);
    renglon++;  //renglon = renglon + 1
}

//do-while
/* do {
Todas las lineas de codigo que quiero
agregar alguna linas que haga que la conducion logica se deje de cumplir en algun momento.
} while {condicional logica}
*/

let fila = 1;

do{
    document.writeln(`<p class="btn btn-dark">fila N ${fila}</p>`);
    fila++
}while(fila <= 50)



//for
/*
for(inicializar una variable; condicion logica;encremanta/decremanta variable)
todas las lineas de codigo que quiero
*/

for(let indice = 10; indice >= 0 ; indice --){
    document.writeln(`<p class="btn btn-info">Cuenta segresiva N ${indice}</p>`);
}

