//copiar 2 objetos
const persona = {
    nombre: 'Nicolas',
    apellido: 'Valderrama',
    edad: 20,
    fechaDeNacimiento:'30/06/2002',
};

const medidas = {
    peso: 80,
    altura: 1.80,
};

const resultado = Object.assign(persona, medidas);
console.log(resultado);

//spread operator
const resultado2 = {...persona, ...medidas};
console.log(resultado2);