// funciones tradicionales
function saludar(){
    //todas las lienas de codigo que sabe hacer esta funcion
    document.writeln('<p>Hola mundo 🌎</p>')
}

//funcion con parametros
function saludarPersona(nombre, apellido){
    //todas las lienas de codigo que sabe hacer esta funcion
    document.writeln(`<p>Hola ${nombre}, ${apellido}</p>`)
}

//funciones que retornan un valor
function mostrarCancion(nombreCancion){
    //todas las lienas de codigo que sabe hacer esta funcion
    const cancion = 'La cancion ingresada es: '+ nombreCancion
    console.log(cancion)
    return cancion
}

//expresion de funcion

//arrow functions o funciones en forma de flecha

// llamar o invocar a la funcion

saludar()
const nombre= prompt('ingresa tu nombre');
const apellido= prompt('ingresa tu apellido');

saludarPersona('Matias','Saade')
saludarPersona(nombre, apellido)
saludarPersona(23423, 'hola')

const textoGenerado = mostrarCancion('Crimen')

document.writeln(`<p>El texto generado fue: ${textoGenerado}</p>`)
document.writeln(mostrarCancion('flaca'))