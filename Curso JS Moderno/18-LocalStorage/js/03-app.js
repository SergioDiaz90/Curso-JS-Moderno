/**Remover date del localStorage */

localStorage.removeItem('name');

/**Actualizar un dato */
const arr = JSON.parse(localStorage.getItem('meses'));
arr.push('nuevo-mes');
localStorage.setItem('meses', JSON.stringify(arr));


/**Limpiar el localStorage */
localStorage.clear();