--------------------------------------------------------------------------------------------- 
⋙ ❍ Решение практических задач по программированию:
---
8️⃣ Проверка, является ли строка числом
⌛ Задача: Напишите функцию, которая проверяет, является ли строка числом.
🎯 Решение:
```js
function isNumber(str) {
  return !isNaN(str) && !isNaN(parseFloat(str));
}

console.log(isNumber("12345")); // true
console.log(isNumber("123.45")); // true
console.log(isNumber("abc")); // false
```
Объяснение: Мы используем функцию `isNaN`, чтобы проверить, является ли строка числом, и `parseFloat` для проверки чисел с плавающей точкой.
--------------------------------------------------------------------------------------------- 
