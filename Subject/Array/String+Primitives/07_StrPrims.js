---------------------------------------------------------------------------------------------  
⋙ ❍ Задания со строками + Примитивы:
---
7. Проверка строки на наличие чисел
⌛ Задача: Напишите функцию, которая проверяет, содержит ли строка хотя бы одно число.
🎯 Решение:
```javascript
function containsNumber(str) {
  return /\d/.test(str);
}

console.log(containsNumber("hello123")); // true
console.log(containsNumber("hello")); // false
```
Объяснение: Используем регулярное выражение `\d`, которое проверяет наличие хотя бы одной цифры в строке.
---------------------------------------------------------------------------------------------  
