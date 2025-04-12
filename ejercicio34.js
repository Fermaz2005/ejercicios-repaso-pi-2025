//Promedio por estudiante (matriz)
const notas = [
    [80, 90, 100], // Estudiante 1
    [70, 60, 75], // Estudiante 2
    [88, 95, 92], // Estudiante 3
]
for (let i = 0; i < notas.length; i++) {
    let suma = 0;
    for (let j = 0; j < notas[i].length; j++) {
      suma += notas[i][j];
    }
    let promedio = suma / notas[i].length;
    console.log(`Promedio del estudiante ${i + 1}: ${promedio}`);
  }