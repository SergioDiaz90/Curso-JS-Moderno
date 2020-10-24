/**Como recuperar valores de local-storage */
const name = localStorage.getItem('name');
console.log(name);

/**Como recuperar obj de local-storage */
const obj = JSON.parse(localStorage.getItem('producto'));
console.log(obj);

/**Como recuperar array de local-storage */
const arr = JSON.parse(localStorage.getItem('meses'));
console.log(arr);
