const producto = {
	name: 'Monitor of 20 Inch',
	price: 300,
	available: true,
	data: {
		weigth: '1kg',
		size: '1m',
		production : {
			country: 'China'
		}
	},
}; 

console.log(producto);
console.log(producto.data.weigth);
console.log(producto.data.size);
console.log(producto.data.production.country);
