//Tipo de transporte
let tipo = 'bicicleta'
switch(tipo){
    case "carro": 
    case "moto":
        console.log("Vehiculo con motor");
        break;
    case "bicicleta": 
    case "patineta":
        console.log("Vehiculo sin motor");
        break;
    default:
        console.log("Tipo desconocido");
}