---------------------------------------------------------------------------------------------  
⋙ ❍ Задания со строками + Примитивы:
---
1. Поворот строки
⌛ Задача: Напишите функцию, которая принимает строку и возвращает её перевёрнутую версию.
🎯 Решение:
```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"
```
Объяснение: Мы разбиваем строку на массив символов с помощью `split("")`, затем переворачиваем его методом `reverse()`, и снова соединяем с помощью `join("")`.
--------------------------------------------------------------------------------------------- 
