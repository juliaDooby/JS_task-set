---------------------------------------------------------------------------------------------  
⋙ ❍ Сортировка массива:
---
Сортировка массива — это операция, в которой элементы массива упорядочиваются в определённом порядке (по возрастанию или убыванию). В JavaScript можно использовать как встроенные методы, так и реализовать собственные алгоритмы сортировки.
Несколько популярных методов сортировки массива в JavaScript:
20. Сортировка с использованием метода `sort()`
Метод `sort()` позволяет сортировать массивы. Он изменяет сам массив.
🎯 Пример сортировки по возрастанию (по умолчанию)
```javascript
const array = [5, 2, 8, 1, 4, 7];
array.sort(); // Сортировка по умолчанию (лексикографическая сортировка)
console.log(array); // [1, 2, 4, 5, 7, 8]
```
Пример сортировки чисел по возрастанию
```javascript
const array = [5, 2, 8, 1, 4, 7];
array.sort((a, b) => a - b); // Сортировка по возрастанию
console.log(array); // [1, 2, 4, 5, 7, 8]
```
Пример сортировки чисел по убыванию
```javascript
const array = [5, 2, 8, 1, 4, 7];
array.sort((a, b) => b - a); // Сортировка по убыванию
console.log(array); // [8, 7, 5, 4, 2, 1]
```
Объяснение:
- Метод `sort()` по умолчанию сортирует элементы как строки, поэтому для чисел нужно указать функцию сравнения `(a, b) => a - b` для сортировки по возрастанию, или `(a, b) => b - a` для сортировки по убыванию.
---------------------------------------------------------------------------------------------  
