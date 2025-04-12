//Validar correo electronico
const prompt = require('prompt-sync')();

function validarCorreo(correo) {
  let tieneArroba = false;
  let tienePunto = false;

  for (let i = 0; i < correo.length; i++) {
    if (correo[i] === '@') {
      tieneArroba = true;
    }
    if (correo[i] === '.') {
      tienePunto = true;
    }
  }
  if (tieneArroba && tienePunto) {
    console.log("Correo válido");
  } else {
    console.log("Correo inválido");
  }
}
const correo = prompt("Ingresa tu correo electrónico: ");
validarCorreo(correo);