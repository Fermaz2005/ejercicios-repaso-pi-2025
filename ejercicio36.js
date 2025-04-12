//Saludo personalizado
const prompt = require('prompt-sync')();

function saludar(nombre) {
  console.log(`Hola, ${nombre}. Bienvenido a la clase de programación.`);
}
const nombreUsuario = prompt("Ingresa tu nombre: ");
saludar(nombreUsuario);