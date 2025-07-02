const mostrarCancion = (titulo) => {

}


const peliculas = [];

//arrays de canciones
//const canciones = ['crimen', 'tan solo' , 'mujer amante', 2010, true ]
const canciones = [
  "Crimen",
  "Tan Solo",
  "Jijiji",
  "Lisa",
  "Mil Horas",
  "Nada",
  "Puente",
];
//mostrar en arrays

console.log(peliculas);
console.log(canciones);

document.writeln(canciones);
const indice = 0;
document.writeln(
  `<p>Mostar un solo elemento dentro del array: ${canciones[3]}</p>`
);
document.writeln(
  `<p>Mostar el primer elemento  del array: ${canciones[indice]}</p>`
);
document.writeln(
  `<p>Mostar el elemento de la posicion 30 del array: ${canciones[indice]}</p>`
);

document.writeln(`<h2 class="ms-3">Mostar el array de canciones - Cantidad de elemntos ${canciones.length}</h2>`);
document.writeln(`<ul class=" my-3 list-group">`);
for (let i = 0; i < canciones.length; i++) {
  document.writeln(
    `<li class="list-group-item mx-3 w-75 shadown">${canciones[i]}</li>`
  );
}
document.writeln(`</ul>`);

//Agregar elementos al arrays

document.writeln(
  `<h2 class="ms-3">Agregar un elementos al inicio del arrays - Cantidad de elemntos ${canciones.length}</h2>`
);
canciones.unshift(false, "Son de amores");

document.writeln(`<ul class=" my-3 list-group">`);
for (let i = 0; i < canciones.length; i++) {
  document.writeln(
    `<li class="list-group-item mx-3 w-75 shadown">${canciones[i]}</li>`
  );
}
document.writeln(`</ul>`);

//Agregar elmento al final de array

document.writeln(
  `<h2 class="ms-3">Agregar un elementos al final del arrays - Cantidad de elemntos ${canciones.length}</h2>`
);
canciones.push("Silencio, solo aqui");

document.writeln(`<ul class=" my-3 list-group">`);
for (let i = 0; i < canciones.length; i++) {
  document.writeln(
    `<li class="list-group-item mx-3 w-75 shadown">${canciones[i]}</li>`
  );
}
document.writeln(`</ul>`);

//Agregar elmento al centro de array

canciones.splice(4, 0, "Homero");
document.writeln(
  `<h2 class="ms-3">Agregar un elementos en el medio del arrays - Cantidad de elemntos ${canciones.length}</h2>`
);

document.writeln(`<ul class=" my-3 list-group">`);
for (let i = 0; i < canciones.length; i++) {
  document.writeln(
    `<li class="list-group-item mx-3 w-75 shadown">${canciones[i]}</li>`
  );
}
document.writeln(`</ul>`);


//Borrar elemento del array

canciones.shift()
document.writeln(
  `<h2 class="ms-3">Borrar un elementos del inicio del arrays - Cantidad de elemntos ${canciones.length} </h2>`
);

document.writeln(`<ul class=" my-3 list-group">`);
for (let i = 0; i < canciones.length; i++) {
  document.writeln(`<li class="list-group-item mx-3 w-75 shadown">${canciones[i]}</li>`
  );
}
document.writeln(`</ul>`);

//Borrar ultimo elemento del array

canciones.pop()
document.writeln(
  `<h2 class="ms-3">Borrar un elementos del inicio del arrays - Cantidad de elemntos ${canciones.length} </h2>`
);

document.writeln(`<ul class=" my-3 list-group">`);
for (let i = 0; i < canciones.length; i++) {
  document.writeln(`<li class="list-group-item mx-3 w-75 shadown">${canciones[i]}</li>`
  );
}
document.writeln(`</ul>`);

//borrar 
//splice(2,1) (2 es la pisicion)-(1Elemento a borrar)
canciones.splice(2,1)
document.writeln(
  `<h2 class="ms-3">Borrar un elementos del inicio del arrays - Cantidad de elemntos ${canciones.length} </h2>`
);
document.writeln(`<ul class=" my-3 list-group">`);
for (let i = 0; i < canciones.length; i++) {
  document.writeln(`<li class="list-group-item mx-3 w-75 shadown">${canciones[i]}</li>`
  );
}
document.writeln(`</ul>`);

//Modificar elementos de array

canciones[4] = "Paramore"
document.writeln(
  `<h2 class="ms-3">Modificar un elementos del inicio del arrays - Cantidad de elemntos ${canciones.length} </h2>`
);
document.writeln(`<ul class=" my-3 list-group">`);
for (let i = 0; i < canciones.length; i++) {
  document.writeln(`<li class="list-group-item mx-3 w-75 shadown">${canciones[i]}</li>`
  );
}
document.writeln(`</ul>`);