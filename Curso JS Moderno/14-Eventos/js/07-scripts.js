const cardDiv = document.querySelector('.card');

/**prevención por delagación */
cardDiv.addEventListener('click', (e) => {
	if(e.target.classList.contains('titulo')) {
		console.log('hiciste click en el titulo');
	}
	
	if(e.target.classList.contains('precio')) {
		console.log('hiciste click en el precio');
	}
	
	if(e.target.classList.contains('card')) {
		console.log('hiciste click en el card');
	}
});