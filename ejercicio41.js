//Generar contraseña aleatoria
const prompt = require('prompt-sync')();

function generarContraseña(longitud) {
  const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let contraseña = '';

  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    contraseña += caracteres[indiceAleatorio];
  }
  return contraseña;
}
const longitud = parseInt(prompt("Ingresa la longitud de la contraseña: "));
console.log("Contraseña generada:", generarContraseña(longitud));