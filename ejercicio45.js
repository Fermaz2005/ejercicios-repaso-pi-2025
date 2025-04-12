//Filtrar estudiantes aprobados
const estudiantes = [
    { nombre: 'Ana', nota: 85 },
    { nombre: 'Luis', nota: 45 },
    { nombre: 'Carla', nota: 70 },
  ];
  const aprobados = estudiantes.filter(estudiante => estudiante.nota >= 60);
  console.log("Estudiantes aprobados:", aprobados);