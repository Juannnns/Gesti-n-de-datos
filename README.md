# Gestión de Datos con Objetos, Sets y Maps en JavaScript
Este proyecto es una demostración simple y educativa del manejo de estructuras de datos en JavaScript. como Objetos, Sets y Maps, para representar y organizar información sobre productos.

## 📁 Estructura del proyecto
El archivo pincipal es:
+ `gestion_datos.js`: Contiene todo el código necesario para ejecutar la gestión de productos usando estructuras claves de JavaScript.

## ⚙️ ¿Cómo funciona?
#### 1. __Objeto__ `productos`
Se crea un obejto que almacena varios productos con su `id`, `nombre` y `precio`. Es la estructura principal para representar datos individuales de cada producto.

#### 2. `Set` __para nombres de producto__
Se extraen los nombres de todos los productos y se guardan en un `Set`, lo que permite obtener una lista única de nombres sin duplicados.

#### 3. `Map` __para categorías__
Se define un `Map` que relaciona categorías con productos. Esta estructura permite acceder fácilmente a qué producto pertenece a qué categoría, aunque en este caso hay un pequeño error: al repetir la clave `"Periféricos"`, solo se conserva el último valor.

#### 4. Recorrido de estructuras
+ Se recorre el objeto `productos` con `for...in` para mostrar cada producto.

+ Se recorre el `Set` con `for...of` para mostrar los nombres únicos.
+ Se recorre el `Map` con `.forEach()` para mostrar productos y sus categorías.

## 🧠 Explicación de partes claves del código

```js
const productos = {
    1:  { id: 1, nombre: "Computadora", precio: 1200 },
    2:  { id: 2, nombre: "Monitor", precio: 800 },
    3:  { id: 3, nombre: "Teclado", precio: 80 },
};
```
Se define un objeto llamado `productos` que simula una pequeña base de datos de productos. Cada producto tiene su propio ID como clave.

```js
const nombresProductos = new Set(Object.values(productos).map(producto => producto.nombre));
```
Este fragmento transforma los valores del objeto `productos` en un array, extrae solo los nombres con `map()` y los guarda en un `Set`, eliminando duplicados automáticamente.

```js
const categorias = new Map([
    ["Electrónica", "Computadora"],
    ["Periféricos", "Monitor"],
    ["Periféricos", "Teclado"],
]);
```

Aquí se crea un `Map`, que permite tener claves no-string y mantener el orden de inserción. Sin embargo, hay una pequeña observación: las claves `"Periféricos"` se repiten, por lo tanto, el valor anterior será sobrescrito. El resultado solo mantendrá la última pareja clave-valor de esa categoría.

```js
for (const id in productos) {
    console.log(`Producto ID: ${id}, Detalles:`, productos[id]);
}
```
Uso del bucle `for...in` para recorrer claves de un objeto.

```js
for (const nombre of nombresProductos) {
    console.log(`Nombre del producto: ${nombre}`);
}
```
Uso de `for...of` para recorrer un `Set`.

```js
categorias.forEach((producto, categoria) => {
    console.log(`Producto: ${producto}, Categoría: ${categoria}`);
});
```
Uso de `.forEach()` en un `Map`, accediendo a cada pareja de clave-valor.

## 🧪 Resultado final
El script imprime en consola los siguientes elementos:
+ Lista detallada de productos.
+ Set de nombres únicos.
+ Categorías con sus respectivos productos.