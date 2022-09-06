const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// comprobar si un valor exite en un arreglo

meses.forEach( mes => {
    if(mes == 'Enero'){
        console.log('Enero si existe');
    }
});

// includes retorna un valor booleano (no sirve en objetos)
const resultado = meses.includes('Enero');
console.log(resultado);

// some ideal para arreglos de objetos
const existe = carrito.some( producto => producto.nombre === 'Celular');
console.log(existe);