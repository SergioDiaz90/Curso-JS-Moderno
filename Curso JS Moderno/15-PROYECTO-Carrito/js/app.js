// variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargaEventListeners();
function cargaEventListeners() {
	// Add course the card in the car
	listaCursos.addEventListener('click', agregarCurso);
}

function agregarCurso(e) {
	e.preventDefault();
	if (e.target.classList.contains('agregar-carrito')) {
		const cursoSeleccionado = e.target.parentElement.parentElement;
		leerDatosCurso(cursoSeleccionado);
	}
}

//leer y extrarer info del curso
function leerDatosCurso(curso) {
	// crear un objeto con el contenido del curso
	const infoCurso = {
		imagen: curso.querySelector('img').src,
		titulo: curso.querySelector('h4').textContent,
		precio: curso.querySelector('.precio span').textContent,
		id: curso.querySelector('a').getAttribute('data-id'),
		cantidad: 1
	}
	//agregar elementos al arreglo del carrito
	articulosCarrito = [...articulosCarrito, infoCurso];
	console.log(articulosCarrito);
	carritoHTML(infoCurso);
}

// muestra el carrito de compras en el html
function carritoHTML(curso) {
	// Eliminar cursos del carrito
	limpiarHTML();
	// Guardar cursos en el carrito
	articulosCarrito.forEach((curso) => {
		const row = document.createElement('tr');
		row.innerHTML = `
			<td>
				<img src=${curso.imagen}>
			</td>
			<td>
				${curso.titulo}
			</td>
			<td>
				${curso.precio}
			</td>
			<td>
				${curso.cantidad}
			</td>
		`
		contenedorCarrito.appendChild(row);
	});
}

function limpiarHTML () {
	//forma lenta
	// contenedorCarrito.innerHTML = '';
	while(contenedorCarrito.firstChild) {
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}