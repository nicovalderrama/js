//Funciones que retornan valores

function sumar(a, b) {
    return a + b;
}

const resultado = sumar(2, 2);

let total=0;

function agregarCarrito(precio){
    return total += precio;
};

function calcularImpuesto(total){
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es: ${totalPagar}`);