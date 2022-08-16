const persona = {
    nombre: 'Nicolas',
    apellido: 'Valderrama',
    edad: 20,
    fechaDeNacimiento:'30/06/2002',
        informacion:{
            peso: 80,
            altura: 1.80,
        }
};

//desectructurar el objeto con otro objeto anidado
const {nombre, informacion:{peso, altura}} = persona;