---------------------------------------------------------------------------------------------  
⋙ ❍ Задачи с числами и массивом:
---
13. Найти минимальное значение в массиве
⌛ Задача: Напишите функцию, которая находит минимальное значение в массиве.
🎯 Решение:
```javascript
function findMin(arr) {
  return Math.min(...arr);
}

console.log(findMin([5, 1, 8, 2])); // 1
```
Объяснение: Мы используем `Math.min()` с оператором расширения для поиска минимального значения.
---------------------------------------------------------------------------------------------  
