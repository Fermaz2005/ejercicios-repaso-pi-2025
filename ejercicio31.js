//Contar numeros pares
const numeros = [2, 7, 10, 15, 22, 33];
let contador = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    contador++;
  }
}
console.log("Cantidad de números pares:", contador);