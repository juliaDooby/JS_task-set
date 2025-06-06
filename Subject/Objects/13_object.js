---------------------------------------------------------------------------------------------  
⋙ ❍ Объекты:
---
13. Найти максимальное значение в объекте
⌛ Задача: Напишите функцию, которая находит максимальное значение в объекте.
Пример:
```javascript
const obj = { a: 10, b: 20, c: 5 };
findMaxValue(obj); // 20
```
🎯 Решение:
```javascript
const findMaxValue = (obj) => {
  return Math.max(...Object.values(obj));
};
```
Сложность: O(n).
---------------------------------------------------------------------------------------------  
