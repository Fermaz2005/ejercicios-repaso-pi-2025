//Menu interactivo 
const prompt = require('prompt-sync')();
let opcion;
do {
  console.log("Menú:");
  console.log("A - Saludo simple");
  console.log("B - Saludo personalizado");
  console.log("3 - Salir");

  opcion = prompt("Elige una opción: ");

  if (opcion === "A") {
    console.log("Bienvenid@");
  } else if (opcion === "B") {
    let nombreIngresado = prompt("Ingresa tu nombre: ");
    console.log("Bienvenid@ " + nombreIngresado);
  }

} while (opcion !== "3");