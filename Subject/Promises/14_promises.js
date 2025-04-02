---------------------------------------------------------------------------------------------
⋙ ❍ Работа с Promises (асинхронным кодом):
---
14. Promise.any
⌛ Задача: Как использовать `Promise.any`?
🎯 Решение:
```javascript
const promise1 = Promise.reject("Error");
const promise2 = Promise.resolve("Success");

Promise.any([promise1, promise2]).then(result => console.log(result)); // "Success"
```
Объяснение: `Promise.any` возвращает первый успешно выполненный промис.
---------------------------------------------------------------------------------------------
