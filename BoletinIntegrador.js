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

