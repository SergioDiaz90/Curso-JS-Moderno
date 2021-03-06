const carrito = [
	{ nombre: 'monitor 27 pulgadas', precio: 500 },
	{ nombre: 'Televisor', precio: 100 },
	{ nombre: 'Tablet', precio: 700 },
	{ nombre: 'Audifonos', precio: 600 },
	{ nombre: 'Teclado', precio: 200 },
	{ nombre: 'Celular', precio: 700 },
]

// Map method crea un nuevo array 
const copy = carrito.map((elem) => {
	return`${elem.nombre} - Precio: ${elem.precio}`;
});

console.log(copy);