//Calcular promedio de notas 
const notas = [80, 90, 70, 100];
const suma = notas.reduce((total, nota) => total + nota, 0);
const promedio = suma / notas.length;
console.log("Promedio de notas:", promedio);