//Aplicar IVA a productos
const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
  ];
  const productosConIVA = productos.map(producto => {
    return {
      nombre: producto.nombre,
      precio: producto.precio * 1.12  // se le suma el 12% al precio
    };
  });
  console.log("Productos con IVA:", productosConIVA);