document.addEventListener('DOMContentLoaded', () => {
	/**Eventos del mouse */
	const nav = document.querySelector('.navegacion');
	nav.addEventListener('click', () => {
		console.log('click en nav');
	});
	// mouseenter event
	nav.addEventListener('mouseenter', () => {
		console.log('entrando al nav');
	});
	// mouseenter out
	nav.addEventListener('mouseout', () => {
		console.log('saliendo al nav');
	});
	// mouseenter event
	nav.addEventListener('mousedown', () => {
		console.log('click con mousedown al nav');
	});
	// mouseup event
	nav.addEventListener('mouseup', () => {
		console.log('click levantado al nav');
	});
	// dbclick event
	nav.addEventListener('dbclick', () => {
		console.log('entrando al nav');
	});
});