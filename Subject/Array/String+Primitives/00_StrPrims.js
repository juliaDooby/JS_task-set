---------------------------------------------------------------------------------------------  
⋙ ❍ Задания со строками + Примитивы:
---
0. Проверка на пустую строку
⌛ Задача: Напишите функцию, которая проверяет, является ли строка пустой. Строка считается пустой, если она состоит только из пробелов.
🎯 Решение:
```javascript
function isEmpty(str) {
  return str.trim() === "";
}

console.log(isEmpty("")); // true
console.log(isEmpty(" ")); // true
console.log(isEmpty("Hello")); // false
```
Объяснение: Используем `trim()` для удаления пробелов с начала и конца строки. Если результат пустой, значит строка пуста.
---------------------------------------------------------------------------------------------  
