//modo estricto

'use strict';
const persona = {
    nombre: 'Nicolas',
    apellido: 'Valderrama',
    edad: 20,
    fechaDeNacimiento:'30/06/2002',
};

//congelar el objeto - no se puede modificar
Object.freeze(persona);

//verificar si el objeto esta congelado
console.log(Object.isFrozen(persona));

