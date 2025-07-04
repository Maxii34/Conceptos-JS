//notacion literal

const pelicula ={ 
    // propiedades clave: valor
    titulo: 'Episodio 3 la venganza de los siths',
    duracion: '2:20',
    anio: 2005,
    puntaje: 9.5,
    categoria: 'Ciencia ficción',
    actores: ['Ewan Mcgregor', 'Hayden Christensen'],
    //metodos
    reproducir: function (){
        console.log(this)
        document.writeln(`<p>Comenzo la peli ▶ <b>${this.titulo}</b> </p>`)
    },
    detener: () =>{
        document.writeln(`<p>La peli se detuvo ⏹ </p>`)
    }
}

console.log(this)
// mostrar el objeto
console.log(pelicula)
document.writeln(pelicula)
document.writeln('<h1>Objeto pelicula</h1>')
document.writeln(`<p>Titulo: ${pelicula.titulo}</p>`)
document.writeln(`<p>Duración: ${pelicula.duracion}</p>`)
document.writeln("<p>Categoria:"+pelicula[`categoria`]+"</p>")
document.writeln(`<p>Categoria: ${pelicula.categoria}</p>`)
document.writeln(`<p>Año: ${pelicula.año}</p>`)

//agregar propiedades nuevas
pelicula.imdb = 7.6
document.writeln(`<p>IMdb: ${pelicula.imdb}</p>`)

//modificar un objeto
pelicula.imdb = 8.7
document.writeln(`<p>IMdb: ${pelicula.imdb}</p>`)

//borrar propiedad de un objeto
delete pelicula.puntaje
console.log(pelicula)
document.writeln(`<p>Puntaje: ${pelicula.puntaje}</p>`)

//usar los metodos del objeto
pelicula.reproducir()
pelicula.detener()


