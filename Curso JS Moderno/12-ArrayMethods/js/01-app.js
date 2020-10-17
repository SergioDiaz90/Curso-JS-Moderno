const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Método manual para recorrer un array
meses.forEach(mes => { console.log(mes) });

//Con un Array method
/* Este array method solamente nos sirve para array sencillos*/

const value = meses.includes('Julio'); // true

console.log(value);

//Con otro Array method
/*Metodo para obtener información de un array */
const value2 = carrito.some(product => {
    console.log(product.nombre);
});

//Usando Array method some para array sencillos

const value3 = meses.some(mes => {
    console.log(mes);
});