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

const { name , price, available, data: { production: { country }}} = producto;

console.log(name);
console.log(price);
console.log(available);
console.log(country);
