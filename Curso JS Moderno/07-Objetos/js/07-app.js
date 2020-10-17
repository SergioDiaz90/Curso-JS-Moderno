'use strict';

const producto = {
	name: 'Monitor of 20 Inch',
	price: 300,
	available: true
};

// Forma para que un elemento no se modifique (congelar)
Object.freeze(producto);

console.log(producto);

// Forma para saber si un objeto esta congelado
console.log(Object.isFrozen(producto));
