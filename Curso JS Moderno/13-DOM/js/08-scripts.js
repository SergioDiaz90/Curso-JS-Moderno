/** Traversing de DOM -> recorrer elementos DOM*/

const navegacion = document.querySelector('.navegacion');
// Los espacios en blanco son considerados elementos.
console.log(navegacion.childNodes);
// lista elementos reales (HTML)
console.log(navegacion.children);
// como son nodos puedo acceder por posición
console.log(navegacion.children[0]);

// Navegación en las propiedades
console.log(navegacion.children[1].nodeName);
console.log(navegacion.children[1].nodeType);

// //Navegación de elementos o traversing de DOM
const card = document.querySelector('.card');
// card.children[1].children[1].textContent = 'Nuevo heading desde traversing de DOM';
// console.log(card.children[1].children[1].textContent);

// card.children[0].src = 'img/hacer3.jpg';

// Trversing al padre
console.log(card.parentElement.parentElement);

/** Seleccionar el siguiente elemento o su hermano*/
console.log(card.nextElementSibling);

/**Ultimo hermanno */
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);

console.log(ultimoCard.previousElementSibling);

/** Primer y ultimo elemento de la navegación*/
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
