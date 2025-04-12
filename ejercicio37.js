//Area de un triangulo
const prompt = require('prompt-sync')();

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}
const base = parseFloat(prompt("Ingresa la base del triángulo: "));
const altura = parseFloat(prompt("Ingresa la altura del triángulo: "));

const area = calcularAreaTriangulo(base, altura);
console.log("El área del triángulo es:", area);