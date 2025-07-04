// funciones tradicionales
function saludar() {
  //todas las lienas de codigo que sabe hacer esta funcion
  document.writeln("<p>Hola mundo 🌎</p>");
}

//funcion con parametros
function saludarPersona(nombre, apellido) {
  //todas las lienas de codigo que sabe hacer esta funcion
  document.writeln(`<p>Hola ${nombre}, ${apellido}</p>`);
}

//funciones que retornan un valor
function mostrarCancion(nombreCancion) {
  //todas las lienas de codigo que sabe hacer esta funcion
  const cancion = "La cancion ingresada es: " + nombreCancion;
  console.log(cancion);
  return cancion;
}

//expresion de funcion
// const sumar = function (numero1, numero2){
//     // document.writeln(`<p>Resultado: ${numero1 + numero2}</p>`)
//    return numero1 + numero2
// }

//arrow functions o funciones en forma de flecha
const sumar = (numero1, numero2) => numero1 + numero2;

// llamar o invocar a la funcion

saludar();
const nombre = prompt("ingresa tu nombre");
const apellido = prompt("ingresa tu apellido");

saludarPersona("Matias", "Saade");
saludarPersona(nombre, apellido);
saludarPersona(23423, "hola");

const textoGenerado = mostrarCancion("Crimen");

document.writeln(`<p>El texto generado fue: ${textoGenerado}</p>`);
document.writeln(mostrarCancion("flaca"));

const num1 = parseInt(prompt("Ingresa un número"));
const num2 = parseInt(prompt("Ingresa un segundo número"));

const resultado = sumar(num1, num2);
console.log(resultado);

document.writeln(`<p>Resultado: ${sumar(12, 5)}</p>`);
