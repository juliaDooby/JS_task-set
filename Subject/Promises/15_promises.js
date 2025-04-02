---------------------------------------------------------------------------------------------
⋙ ❍ Работа с Promises (асинхронным кодом):
---
15. Параллельная обработка с результатами
⌛ Задача: Получите массив результатов промисов, включая ошибки.
🎯 Решение:
```javascript
const promise1 = Promise.resolve(1);
const promise2 = Promise.reject("Error");

Promise.allSettled([promise1, promise2]).then(results => console.log(results));
```
Результат:
```javascript
[
  { status: "fulfilled", value: 1 },
  { status: "rejected", reason: "Error" }
]
```
---------------------------------------------------------------------------------------------
