const alumn = { name: 'Javier', age: 25 };

const newAlum = { ...alumn, name: 'Manuel' };

console.log(alumn);
console.log(newAlum);


const suma = (a, b) => a + b;
console.log(suma(2, 3));

const precios = [10, 8, 4, 6];

const resultado = precios
    .filter(precio => precio > 7)
    .map(precio => `Precio: ${precio}`);
console.log(resultado);