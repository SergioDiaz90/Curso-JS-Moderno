//const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Uso del metodo filter para el filtrado de valores

let values = carrito.filter( producto => producto.precio < 300);
console.log(values);
let values2 = carrito.filter( producto => producto.nombre !== 'Tablet');
console.log(values2);
