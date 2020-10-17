const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

const result = meses.concat(meses2, meses3);

console.log(result);

const result2 = [...meses, ...meses2, ...meses3];
console.log(result2);
