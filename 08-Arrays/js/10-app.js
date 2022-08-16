//metodo map
const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

carrito.forEach((p) => {
    console.log(`Nombre: ${p.nombre} - Precio: ${p.precio}`);
});

//la diferencia entre map y forEach es que el map retorna un nuevo array con los valores modificados
const nuevoCarrito = carrito.map((p) => {
    return {
        nombre: p.nombre,
        precio: p.precio * 0.8
    }
});