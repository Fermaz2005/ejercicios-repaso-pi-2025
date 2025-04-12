//Suma de arreglos
const prompt = require('prompt-sync')();

function sumarArreglo(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  return suma;
}
let numeros = [];
let continuar = true;
while (continuar) {
  const numero = parseFloat(prompt("Ingresa un número: "));
  numeros.push(numero); // Agregar el número al arreglo

  let respuesta = prompt("¿Deseas agregar otro número? (si/no): ");
  if (respuesta !== "si") {
    continuar = false;
  }
}
console.log("La suma total es:", sumarArreglo(numeros));