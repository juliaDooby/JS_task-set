---------------------------------------------------------------------------------------------
⋙ ❍ Работа с Promises (асинхронным кодом):
---
4. Promise.all с ошибкой
⌛ Задача: Что произойдёт, если один из промисов завершится с ошибкой?
```javascript
const promise1 = Promise.resolve(1);
const promise2 = Promise.reject("Error");
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then(results => console.log(results))
  .catch(error => console.log(error));
```
🎯 Решение:
```javascript
"Error"
```
Объяснение: Если один из промисов завершится с ошибкой, `Promise.all` сразу перейдёт в состояние `rejected`.
---------------------------------------------------------------------------------------------
