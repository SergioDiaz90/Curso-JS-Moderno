document.addEventListener('DOMContentLoaded', () => {
	/**Creación de html desde JS */

	// Agregar texto
	const enlace = document.createElement('a');
	enlace.textContent = 'Nuevo enlace';

	console.log(enlace);

	// Añadiendo href

	enlace.href = 'href';

	enlace.target = 'blank';

	enlace.setAttribute('data-enlace', 'nuevo-enlace');

	enlace.classList.add('alguna-clase');
	// mostrar enlace

	enlace.onclick = miFuncion;

	const nav = document.querySelector('.navegacion');
	console.log(nav);
	// poner al final
	nav.appendChild(enlace);
	// Poner entre elementos -> Siempre requiere nodo de referencia
	nav.insertBefore(enlace, nav.children[1]);


	function miFuncion () {
		alert('diste click');
	}

	// Creacion card forma dinámica

	const parrafo1 = document.createElement('p');
	parrafo1.textContent = 'Concierto';
	parrafo1.classList.add('categoria', 'concierto');

	const parrafo2 = document.createElement('p');
	parrafo2.textContent = 'Concierto de rock';
	parrafo2.classList.add('titulo');

	const parrafo3 = document.createElement('p');
	parrafo3.textContent = '800 por persona';
	parrafo3.classList.add('precio');

	// crear div clase info
	const info = document.createElement('div');
	info.classList.add('info');

	info.appendChild(parrafo1);
	info.appendChild(parrafo2);
	info.appendChild(parrafo3);

	// Crear imagen
	const imagen = document.createElement('img');
	imagen.src = 'img/hacer2.jpg';
	imagen.classList.add('img-fluid');
	imagen.alt = 'texto alternativo';

	// Crear card padre

	const card = document.createElement('div');
	card.classList.add('card');

	card.appendChild(imagen);
	card.appendChild(info);

	// insertar ne el HTML
	const contenedor = document.querySelector('.hacer .contenedor-cards');
	contenedor.appendChild(card);

	// insertar al inicio
	contenedor.insertBefore(card, contenedor.children[0]);

});
