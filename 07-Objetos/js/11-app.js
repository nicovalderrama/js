//funciones en objetos
const persona = {
    nombre: 'Nicolas',
    apellido: 'Valderrama',
    edad: 20,
    fechaDeNacimiento:'30/06/2002',
    mostrarInfo: () => {
        console.log(`${this.nombre} ${this.apellido}`);
    }
};
//this busca el valor del objeto que se esta ejecutando

persona.mostrarInfo();
