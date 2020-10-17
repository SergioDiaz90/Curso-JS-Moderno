const pendientes = [ 'Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const carrito = [
	{ nombre: 'Monitor 27 pulgadas', precio: 500},
	{ nombre: 'Reloj', precio: 200},
	{ nombre: 'Xbox', precio: 400},
	{ nombre: 'Lavadora', precio: 800},
	{ nombre: 'Olla', precio: 600},
];

// Ciclo for para obtener elementos

for (let pendiente of pendientes) {
	console.log(pendiente);
}

for (let producto of carrito) {
	console.log(producto.nombre);
}
