const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Encontrar un mes de forma manual
meses.forEach((mes, idx) => {
	if (mes === 'Abril')  console.log(`Encontrado en el index ${idx}`);
});

// Encontrar index con Array Method findIndex

const value = meses.findIndex(mes => mes === 'Abril');

console.log(value);

// buscar en array con objetos
/*Devuelve el primer index cuyo valor cumpla con la condición */
const price = carrito.findIndex(product => product.precio === 400);

console.log(price);