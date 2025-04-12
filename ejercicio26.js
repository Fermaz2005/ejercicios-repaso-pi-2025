//Suma hasta 100
const numeros = [10, 15, 20, 25, 30, 5]
let suma = 0 
let contador = 0
let i = 0

while(suma < 100 && i < numeros.length){
    suma += numeros[i]
    i++
}
console.log("La suma final es:", suma)
console.log("Numeros usados:", contador)