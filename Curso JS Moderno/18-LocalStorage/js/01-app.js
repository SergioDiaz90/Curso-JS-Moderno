/**Forma para guardar datos en LocalStorage */
localStorage.setItem('name', 'Sergio');

/**Guardar datos de sesión */
sessionStorage.setItem('name', 'Esteban');

/**Como guardar objetos en localStorage */

const productos = {
	name: 'Tv de 20 pulgadas',
	precio: 300
}

const strProductos = JSON.stringify(productos);
localStorage.setItem('producto', strProductos);

/**Como guardar arrays en localStorage */
const meses = ['enero', 'febrero', 'Marzo'];
const strMeses = JSON.stringify(meses);
localStorage.setItem('meses', strMeses);