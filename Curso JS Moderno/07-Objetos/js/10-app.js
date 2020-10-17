'use strict';

const producto = {
	name: 'Monitor of 20 Inch',
	price: 300,
	available: true
};

const medidas = {
	weight: '1kg',
	size: '1m'
}

// Impresion de 2 objetos
console.log(producto);
console.log(medidas);

// 1era forma de unir 2 objetos

const resultado = Object.assign(producto, medidas);
console.log(resultado)
// 2da forma o spread operator y rest operator

const resultado2 = {...producto, ...medidas}
console.log(resultado2);