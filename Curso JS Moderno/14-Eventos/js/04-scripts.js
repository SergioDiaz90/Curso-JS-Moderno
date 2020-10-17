document.addEventListener('DOMContentLoaded', () => {
	const formulario = document.querySelector('#formulario');
	/** evento para validar formularios */
	formulario.addEventListener('submit', (e) => {
		e.preventDefault(e);
		console.log(e.target.action);
	});
});