const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

// No encuentra elementos ocultos con el CSS visibility: hidden;
console.log(encabezado.innerText);
// si encuentra elementos ocultos con el CSS visibility;
console.log(encabezado.textContent);
// Trae el html 
console.log(encabezado.innerHTML); 

document.querySelector('.contenido-hero h1').textContent = 'nuevo heading';
encabezado.textContent = 'other heading';

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';
