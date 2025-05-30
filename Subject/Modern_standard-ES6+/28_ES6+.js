---------------------------------------------------------------------------------------------
⋙ ❍ Современные стандарты JavaScript (ES6+):
---
28. Использование `Array.prototype.filter()`
⌛ Задача: Отфильтруйте элементы массива, оставив только те, которые больше 10.
🎯 Решение:
```javascript
const numbers = [5, 12, 8, 130, 44];

const filtered = numbers.filter(num => num > 10);

console.log(filtered); // [12, 130, 44]
```
Объяснение:
- Метод `filter()` создает новый массив, содержащий все элементы, которые удовлетворяют условию.
---------------------------------------------------------------------------------------------
