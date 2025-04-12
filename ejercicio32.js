//Buscar un nombre
const nombres = ['Ana', 'Carlos', 'Pedro', 'Lucía'];
let encontrado = false;

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] === "Lucía") {
    encontrado = true;
    break;
  }
}

if (encontrado) {
  console.log("Nombre encontrado");
} else {
  console.log("Nombre no encontrado");
}