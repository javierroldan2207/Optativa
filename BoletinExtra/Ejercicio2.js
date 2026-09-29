//Ejercicio 2.
const estadoRestaurante = {
    nombre: "El Buen Sabor",
    abierto: true,
    menu: [
        { id: 1, plato: "Pizza Margarita", disponible: true },
        { id: 2, plato: "Pasta Carbonara", disponible: false },
        { id: 3, plato: "Tiramisú", disponible: true }
    ]
};

const newStado = {...estadoRestaurante, menu: estadoRestaurante.menu.map(plate => plate.id === 2 ? {...plate, disponible: true} : plate)};

console.log(newStado);