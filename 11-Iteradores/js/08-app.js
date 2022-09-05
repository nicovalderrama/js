const automovil = {
    modelo: 'Camaro',
    motor: 6.1,
    anio: 1969,
    marca: 'Chevrolet'
}

//for in itera sobre objetos, la variable que se declara es el nombre de la propiedad
//para acceder al valor de la propiedad se usa la notacion de corchetes
for (let propiedad in automovil) {
    console.log(`${propiedad} : ${automovil[propiedad]}`);
}

//esta es la forma de iterar sobre un objeto con for of
for (const [llave,valor] of Object.entries(automovil)) {
    console.log(`${llave} : ${valor}`);
}