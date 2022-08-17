//agregando metodo get y set
const musica = {
    cancion:" ",
    reproducir: (id)=>{console.log(`reproduciendo cancion con el id: ${id}`);},
    pausar: ()=>{console.log('pausando...');},
    crearPlaylist:nombrePlaylist=>{console.log(`Creando la playlist ${nombrePlaylist}`);},
    reproducirPlaylist:nombrePlaylist=>{console.log(`Reproduciendo la playlist ${nombrePlaylist}`);},

    set nuevaCancion(cancion){
        this.cancion=cancion;
        console.log(`Agregando ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

musica.reproducir(30);
musica.pausar();

musica.borrar = id=>{console.log(`borrando cancion con el id: ${id}`);}

musica.crearPlaylist('Rock');
musica.reproducirPlaylist('Rock');
musica.nuevaCancion = 'November Rain';
musica.obtenerCancion();