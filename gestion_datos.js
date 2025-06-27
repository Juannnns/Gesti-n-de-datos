// Inicialización del proyecto
console.log("¡Gestión de Datos con Objetos, Datos y Sets!");

// Defininir el objeto producto
const productos = {
    1:  { id: 1, nombre: "Computadora", precio: 1200},
    2:  { id: 2, nombre: "Monitor", precio: 800},
    3:  { id: 3, nombre: "Teclado", precio: 80},
}
console.log("Objeto producto:", productos);

// Crear un Set con los nombres de los productos
const nombresProductos = new Set(Object.values(productos).map(producto => producto.nombre));
console.log("Set de nombres de productos:", nombresProductos);

// Creacion de un Map para agregar categorías a los productos
const categorias = new Map([
    ["Electrónica", "Computadora"],
    ["Periféricos", "Monitor"],
    ["Periféricos", "Teclado"],
]);
console.log("Map de categorías:", categorias);

// Recorrer el objeto productos
for (const id in productos) {
    console.log(`Producto ID: ${id}, Detalles:`, productos[id]);
}

// Recorrer el Set de productos
for (const nombre of nombresProductos) {
    console.log(`Nombre del producto: ${nombre}`);
}

// Recorrer el Map de productos
categorias.forEach((producto, categoria) => {
    console.log(`Producto: ${producto}, Categoría: ${categoria}`);
});


// Mostrar todo lo que hemos creado
console.log("Prueba completa de gestión de datos.");
console.log("Lista de productos (Objetos)", productos);
console.log("Lista de productos únicos (Set):", nombresProductos);
console.log("Categorías de productos (Map):", categorias);