const persona = {
    nombre: 'Nicolas',
    apellido: 'Valderrama',
    edad: 20,
    fechaDeNacimiento:'30/06/2002',
};

//desectructurar el objeto
const {nombre, apellido, edad, fechaDeNacimiento} = persona;
console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(fechaDeNacimiento);
