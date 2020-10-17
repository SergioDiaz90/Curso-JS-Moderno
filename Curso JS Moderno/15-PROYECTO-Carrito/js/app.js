// variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

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
	console.log(infoCurso);
}