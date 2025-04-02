---------------------------------------------------------------------------------------------
⋙ ❍ Работа с Promises (асинхронным кодом):
---
5. Promise.race
⌛ Задача: Используйте `Promise.race`, чтобы получить результат самого быстрого промиса.
🎯 Решение:
```javascript
const promise1 = new Promise(resolve => setTimeout(() => resolve("First"), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Second"), 500));

Promise.race([promise1, promise2]).then(result => console.log(result)); // "Second"
```
Объяснение: `Promise.race` возвращает результат первого завершившегося промиса.
---------------------------------------------------------------------------------------------
