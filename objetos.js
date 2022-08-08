// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datosPersonales = {
  nombre: "Jimmy",
  apellido: "Bustillo",
  edad: 29,
  altura: 1.78,
  eresDesarrollador: true,
};

// - Una variable que obtenga tu edad a partir del objeto anterior

const edad = datosPersonales.edad;
console.log(edad);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const listaAmigos = [
  { ...datosPersonales },

  {
    nombre: "Aleyda",
    apellido: "Amaya",
    edad: 36,
    altura: 1.62,
    isDeveloper: false,
  },
  {
    nombre: "Harol",
    apellido: "Amaya",
    edad: 26,
    altura: 1.78,
    isDeveloper: false,
  },
];
listaAmigos.forEach((valor) => console.log(valor));

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const edadMayor = listaAmigos.sort((a, b) => b.edad - a.edad);

console.log(edadMayor);
