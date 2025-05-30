---------------------------------------------------------------------------------------------  
⋙ ❍ Методы, такие как map, reduce, filter, Object.keys:
---
1. Умножение всех чисел в массиве на 2
⌛ Задача: Напишите функцию, которая умножает все элементы массива на 2.
Пример:
```javascript
const numbers = [1, 2, 3, 4];
multiplyByTwo(numbers); // [2, 4, 6, 8]
```
🎯 Решение:
```javascript
const multiplyByTwo = (arr) => {
  return arr.map(num => num * 2);
};
```
Объяснение:
- Метод `map()` применяется для умножения каждого элемента массива на 2.
---------------------------------------------------------------------------------------------  
