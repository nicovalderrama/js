//object literal
const persona = {
    nombre: 'Nicolas',
    apellido: 'Valderrama',
    edad: 20,
    fechaDeNacimiento:'30/06/2002',
};

//object constructor
function Persona(nombre,apellido,edad,fechaDeNacimiento){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.fechaDeNacimiento = fechaDeNacimiento;
};


const persona2 = new Persona('Juan','Perez',28,'01/01/1980');

