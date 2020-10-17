const producto = {
	name: 'Monitor of 20 Inch',
	price: 300,
	available: true
};

// Deconstrucción -> forma de sacar llaves de un objeto y asignarlos en un solo paso
const { name, price, available } = producto;
console.log(name);
console.log(price);
console.log(available);
