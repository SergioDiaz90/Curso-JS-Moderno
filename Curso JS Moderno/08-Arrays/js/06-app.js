const carrito = []

// Definición de producto
const producto = {
	name: 'Monitor de 32 pulgadas',
	price: 400
}

const producto2 = {
	name: 'Celular',
	price: 800
}

const producto3 = {
	name: 'Teclado',
	price: 200
}

// spread del array
let resultado = [...carrito, producto, producto2, producto3];
console.log(resultado);
