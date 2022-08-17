//parametros por default en funciones

function saludar(nombre='visitante',apellido=''){
    console.log(`hola ${nombre} ${apellido}`);
}

saludar('nicolas','valderrama');
saludar();