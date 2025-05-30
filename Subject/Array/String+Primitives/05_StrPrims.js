---------------------------------------------------------------------------------------------  
⋙ ❍ Задания со строками + Примитивы:
---
5. Подсчёт количества вхождений подстроки в строку
⌛ Задача: Напишите функцию, которая считает количество вхождений подстроки в строку.
🎯 Решение:
```javascript
function countSubstring(str, substring) {
  return (str.match(new RegExp(substring, "g")) || []).length;
}

console.log(countSubstring("Hello world, hello!", "hello")); // 2
```
Объяснение: Мы используем регулярное выражение с флагом `g`, чтобы найти все вхождения подстроки в строке.
---------------------------------------------------------------------------------------------  
