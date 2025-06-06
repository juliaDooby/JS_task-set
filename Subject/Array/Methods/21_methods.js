---------------------------------------------------------------------------------------------  
⋙ ❍ Массивы:
--- 
⋙ ❍ ⌛ Задача: Разворот массива:
---
21.
Разворот массива — это операция, при которой элементы массива меняют порядок на обратный.
🎯 Решение: Вот несколько способов реализации на JavaScript:
6. С использованием встроенного метода `reverse`
Самый простой способ — использовать метод `reverse`:
```javascript
const array = [1, 2, 3, 4, 5];
const reversedArray = array.reverse();

console.log("Оригинальный массив:", array);      // [5, 4, 3, 2, 1]
console.log("Развёрнутый массив:", reversedArray); // [5, 4, 3, 2, 1]
```
Особенность:
- `reverse` изменяет исходный массив, так что будьте осторожны при использовании.
---------------------------------------------------------------------------------------------  
