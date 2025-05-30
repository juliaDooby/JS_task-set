---------------------------------------------------------------------------------------------
9. Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий только те объекты, у которых имеется свойство “name” –
function filterObjectsWithNames(arr) {
    return arr.filter((obj) => obj.hasOwnProperty('name'));
}
Ваш код для фильтрации объектов, содержащих свойство `"name"`, правильный и эффективный. Он использует метод `.filter()`, чтобы создать новый массив, в котором будут только те объекты, у которых есть это свойство. Метод `hasOwnProperty()` проверяет, имеется ли у объекта непосредственно свойство `"name"` (не наследуемое от прототипа).
Вот ваш код:
```javascript
function filterObjectsWithNames(arr) {
    return arr.filter((obj) => obj.hasOwnProperty('name'));
}
```
Объяснение:
1. `.filter()` — создает новый массив, состоящий из элементов, которые проходят проверку в предоставленной функции.
2. `obj.hasOwnProperty('name')` проверяет, имеет ли объект `obj` свойство `name`. Если да, объект остается в новом массиве.
Пример использования:
```javascript
const arr = [
    { name: 'Alice', age: 25 },
    { age: 30 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie' }
];

console.log(filterObjectsWithNames(arr));
// Результат:
// [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 22 },
//   { name: 'Charlie' }
// ]
```
Результат:
- В новом массиве будут только те объекты, которые имеют свойство `"name"`, а объекты без этого свойства будут исключены.
Альтернативное решение:
Вместо метода `hasOwnProperty()` можно использовать просто проверку существования свойства (если вам не нужно исключать наследуемые свойства):
```javascript
function filterObjectsWithNames(arr) {
    return arr.filter((obj) => obj.name !== undefined);
}
```
Это также будет работать, если свойство `"name"` в объекте определено, даже если оно имеет значение `undefined`. Однако, если вам нужно точно проверять только собственные свойства объекта, то вариант с `hasOwnProperty()` является более надежным.
Пример использования:
```javascript
const arr = [
    { name: 'Alice', age: 25 },
    { age: 30 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie' }
];

console.log(filterObjectsWithNames(arr));
// Результат:
// [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 22 },
//   { name: 'Charlie' }
// ]
```
Оба подхода дадут одинаковый результат. Выбор зависит от того, нужно ли вам точно проверять только собственные свойства или можно учитывать и значения `undefined`.
---------------------------------------------------------------------------------------------
