//creando funciones dentro de un objeto | metodos de propiedades

const musica = {
    reproducir: function(id){
        console.log(`reproduciendo cancion con el id: ${id}`);
    },
    pausar: function(){
        console.log('pausando...');
    },
    crearPlaylist: function(nombrePlaylist){
        console.log(`Creando la playlist ${nombrePlaylist}`);
    },
    reproducirPlaylist: function(nombrePlaylist){
        console.log(`Reproduciendo la playlist ${nombrePlaylist}`);
    }
}

musica.reproducir(30);
musica.pausar();

musica.borrar = function(id){
    console.log(`borrando cancion con el id: ${id}`);
}

musica.crearPlaylist('Rock');
musica.reproducirPlaylist('Rock');