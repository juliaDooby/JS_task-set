---------------------------------------------------------------------------------------------
⋙ ❍ Работа с Promises (асинхронным кодом):
---
0. Создание простого промиса
⌛ Задача: Создайте `Promise`, который выполняется через 1 секунду и возвращает строку `"Resolved"`.
🎯 Решение:
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved");
  }, 1000);
});

promise.then(result => console.log(result)); // "Resolved"
```
Объяснение: `resolve` используется для успешного завершения промиса, а `reject` для ошибок.
---------------------------------------------------------------------------------------------















