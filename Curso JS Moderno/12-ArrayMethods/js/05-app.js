//const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// forma manual de buscar un objeto
let value = '';

carrito.forEach((elem, idx) => {
	if (elem.nombre === 'Tablet') {
		value = carrito[idx];
	}
});

console.log(value);

// Forma de buscar elementos con .find
/*Encuentra y devuelve el primer elemento que cumpla la condición*/
const value2 = carrito.find(producto => producto.precio === 200);
console.log(value2);
