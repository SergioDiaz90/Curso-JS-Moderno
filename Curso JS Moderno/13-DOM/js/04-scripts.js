const card = document.querySelector('.card');
console.log(card);

/** se pueden tener selectores específicos */

const info = document.querySelector('.premium .info'); // especificidad
console.log(info);

// seleccionar elementos como yo quiera
const segundoCard = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//Seleccionar elementos por id

const form = document.querySelector('#formulario');
console.log(form);

//Seleccionar elementos html
const navegation = document.querySelector('nav');
console.log(navegation);

