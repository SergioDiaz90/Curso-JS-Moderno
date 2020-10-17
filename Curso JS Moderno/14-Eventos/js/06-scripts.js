/**Event bubbling */
document.addEventListener('DOMContentLoaded', () => {
	const cardDiv = document.querySelector('.card');
	const infoDiv = document.querySelector('.info');
	const titulo = document.querySelector('.titulo');

	cardDiv.addEventListener('.card', (e) => {
		// deteniendo la propagación
		e.stopPropagation(e);
		console.log('click en card');
	});

	
	infoDiv.addEventListener('.card', (e) => {
		// deteniendo la propagación
		e.stopPropagation(e);
		console.log('click en info');
	});

	
	titulo.addEventListener('.card', (e) => {
		// deteniendo la propagación
		e.stopPropagation(e);
		console.log('click en titulo');
	});
});