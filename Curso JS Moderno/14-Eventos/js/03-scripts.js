document.addEventListener('DOMContentLoaded', () => {
	const busqueda = document.querySelector('.busqueda');
	/**Eventos de teclado */
	busqueda.addEventListener('keydown', () => {
		console.log('escribiendo');
	});

	// Evento keyup
	busqueda.addEventListener('keyup', () => {
		console.log('Deje de escribir');
	});
	//blur -> desselección del input
	busqueda.addEventListener('blur', () => {
		console.log('sali del input');
	});
	// Evento copy
	busqueda.addEventListener('copy', () => {
		console.log('Copie el contenido');
	});
	// Evento paste
	busqueda.addEventListener('paste', () => {
		console.log('Pegue el contenido');
	});
	// evento cut
	busqueda.addEventListener('copy', () => {
		console.log('corte el contenido');
	});
	// evento input
	busqueda.addEventListener('input', (event) => {
		if (event.target.value === '') console.log('fallo la validación');
		console.log(event.target.value);
	});
});