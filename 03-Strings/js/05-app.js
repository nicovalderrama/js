const producto = "monitor de 20 pulgadas";

//reemplazar el texto de una cadena
console.log(producto.replace("pulgadas", "\""));
console.log(producto.replace("monitor", "Monitor curvo"));

//cortar una cadena
console.log(producto.slice(0,10));

//alternativa a slice
console.log(producto.substring(0,10));

//la diferencia entre slice y substring es que substring reemplaza el segundo valor si el primero es mayor que el segundo y slice no hace nada


