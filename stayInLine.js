// Permanece en Fila

/* Próximo en la Fila
En informática una cola (queue) es una estructura de datos abstracta en la cual los elementos se mantienen en orden. Los nuevos elementos se pueden añadir al final de la cola y los elementos previos se retiran del principio de la cola.
Define una función proximoEnLaFila que tome un arreglo (arreglo) y un número (elemento) como argumentos. Agrega el número al final del arreglo y luego elimina el primer elemento del arreglo. La función proximoEnLaFila debe retornar el elemento
que fue removido.
*/

function nextInLine(array, element) {
    array.push(element);
    return array.shift();
}
queue = [1,2,3,4];
console.log(nextInLine(queue, 5));
console.log(queue)