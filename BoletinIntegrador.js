//Ejercicio 1
const estadoApp = {
    usuario: "Admin",
    carrito: [
        { id: 1, articulo: "Ratón", cantidad: 1 },
        { id: 2, articulo: "Teclado", cantidad: 1 }
    ],
    total: 50
};

const nuevoEstado = { ...estadoApp, total: 80, carrito: estadoApp.carrito.map(product => product.articulo === "Teclado") ? { ...product, cantidad: 2 } : product };

//Ejercicio 2

const peliculas = [
{ titulo: "Dune", año: 2021, valoracion: 8.0, vista: true },
{ titulo: "El Padrino", año: 1972, valoracion: 9.2, vista: false },
{ titulo: "Matrix", año: 1999, valoracion: 8.7, vista: true },
{ titulo: "Tenet", año: 2020, valoracion: 7.3, vista: false }
];

const peliculasJSX = peliculas
  .filter(pelicula => !pelicula.vista)
  .map(({ titulo, año, valoracion }) => `<li>${titulo} (${año}) - Nota: ${valoracion}</li>`);

console.log(peliculasJSX);


//Ejercicio3

const datosUsuario = {
id: 99,
nombre: "Elena",
preferencias: {
idioma: "es",
tema: "oscuro"
},
suscripcion: "Premium"
};

const saludarUsuario = ({ nombre, preferencias: { tema } }) =>
  `Hola ${nombre}, tu tema elegido es ${tema}`;

console.log(saludarUsuario(datosUsuario));