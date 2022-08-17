//comunicacion entre funciones

iniciarApp();

function iniciarApp(){
    console.log('iniciando app');
    segundaFuncion();
    
}

function segundaFuncion(){
    console.log('desde segunda funcion');
    usuarioAutenticado('nicolas');
}

function usuarioAutenticado(usuario){
    console.log('autenticando usuario.... espere');
    console.log(`usuario autenticado exitosamente: ${usuario}`);
}

