const persona = {
    nombre: 'Nicolas',
    apellido: 'Valderrama',
    edad: 20,
    fechaDeNacimiento:'30/06/2002',
};

//agregar una nueva propiedad al objeto
persona.nacionalidad = 'Argentino';

//eliminar una propiedad del objeto
delete persona.fechaDeNacimiento;

console.log(persona);
