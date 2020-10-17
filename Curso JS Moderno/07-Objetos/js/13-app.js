const producto = {
	name : 'Monitor de 20 pulgadas',
	price: 300,
	disponible: true
}

// Obtener las claves de un objecto
console.log(Object.keys(producto));
// Obtener los valores de un objeto
console.log(Object.values(producto));
// Devuelve array bidimensional de 2 posiciones para clave y valor
console.log(Object.entries(producto));