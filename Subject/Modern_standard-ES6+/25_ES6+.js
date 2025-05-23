---------------------------------------------------------------------------------------------
⋙ ❍ Современные стандарты JavaScript (ES6+):
---
25. Promise (Асинхронный код)
⌛ Задача: Напишите функцию, которая возвращает промис, разрешающийся через 2 секунды.
🎯 Решение:
```javascript
function delay() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Resolved after 2 seconds");
    }, 2000);
  });
}

delay().then(message => console.log(message)); // "Resolved after 2 seconds"
```
Объяснение:
- `Promise` используется для асинхронных операций, и метод `then()` выполняется, когда промис резолвится.
---------------------------------------------------------------------------------------------
