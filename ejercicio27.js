//Suma del numero secreto
const prompt = require('prompt-sync')();
const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1;
console.log(`(Pista: El número secreto es: ${NUMERO_SECRETO})`);
let intento;

do {
  intento = parseInt(prompt("Adivina el número (entre 1 y 100): "));

  if (intento !== NUMERO_SECRETO) {
    console.log("Intenta otra vez...");
  }

} while (intento !== NUMERO_SECRETO);

console.log("¡Adivinaste!");