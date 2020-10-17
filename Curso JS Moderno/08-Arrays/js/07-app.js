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

carrito.unshift(producto);
carrito.unshift(producto2);
carrito.unshift(producto3);
console.log(carrito);

//Forma de eliminar elementos del medio
carrito.splice(1, 1);