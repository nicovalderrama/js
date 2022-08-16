'use strict';
const persona = {
    nombre: 'Nicolas',
    apellido: 'Valderrama',
    edad: 20,
    fechaDeNacimiento:'30/06/2002',
};

//sellar el objeto - si se puede modificar pero no agregar ni eliminar las propiedades ya existentes
Object.seal(persona);

//verificar si el objeto esta sellado
console.log(Object.isSealed(persona));