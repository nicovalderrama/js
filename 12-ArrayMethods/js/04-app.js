const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//filter
//crea un nuevo arreglo con los elementos que cumplan la condicion
const resultado = carrito.filter( producto => producto.precio > 400);
console.log(resultado);

const resultado2 = carrito.filter( producto => producto.nombre !== 'Celular');

