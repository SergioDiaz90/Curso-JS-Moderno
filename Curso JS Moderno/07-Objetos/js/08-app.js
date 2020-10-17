'use strict';

const producto = {
	name: 'Monitor of 20 Inch',
	price: 300,
	available: true
};

// Forma para que un objeto no se borrar o agregar propiedades
// pero si modificar propiedades existentes(congelar)

Object.seal(producto);

console.log(producto);

// Forma para saber si un objeto esta sellado
console.log(Object.isSealed(producto));
