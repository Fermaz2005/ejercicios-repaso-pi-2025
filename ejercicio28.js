//Validación de contraseña
const prompt = require('prompt-sync')();
const CONTRASENA_CORRECTA = 'claveSegura'
let intento;

do {
  intento = prompt("Ingresa la contraseña: ");

  if (intento !== CONTRASENA_CORRECTA) {
    console.log("Contraseña incorrecta");
  }

} while (intento !== CONTRASENA_CORRECTA);

console.log("Acceso permitido");