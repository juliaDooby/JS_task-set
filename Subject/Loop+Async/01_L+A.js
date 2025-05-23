--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача на асинхронность + eventLoop:
---
1. Создание промиса и использование `.then()`
⌛ Задача: Напишите функцию, которая возвращает промис, который резолвится через 3 секунды.
🎯 Решение:
```javascript
function createPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 3 seconds");
    }, 3000);
  });
}

createPromise().then((message) => {
  console.log(message);
});
```
Объяснение: Промис создается с использованием конструктора `new Promise`, и в нем используется `setTimeout` для асинхронного выполнения через 3 секунды.
--------------------------------------------------------------------------------------------- 
