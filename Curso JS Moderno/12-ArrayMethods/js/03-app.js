//const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// reducir una lista a un solo valor de forma tradicional

let total = 0;

carrito.forEach(product => { total += product.precio});
console.log(total);

// con el Array Method reduce
/* 
	El metodo recibe como parametros la variable y el objeto sobre el cual
	se scará la propiedad para sumar en este caso y así reducir el valor
	y el número al final es el valor inicial de la variable.
*/

let value = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(value);