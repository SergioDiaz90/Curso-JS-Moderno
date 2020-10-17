document.addEventListener('DOMContentLoaded', () => {
	/**eventos scroll */
	window.addEventListener('scroll', () => {
		//console.log('scrolling');

		const scrollPX = window.scrollY;
		console.log(scrollPX);

		// ejemplo scroll animado
		const premium = document.querySelector('.premium');
		const ubicacion = premium.getBoundingClientRect();
		if (ubicacion.top = 754) {
			console.log('El elemento ya es visible');
		} else {
			console.log('todavia dele mas ruedita');
		}
	});

});