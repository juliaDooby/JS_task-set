---------------------------------------------------------------------------------------------
⋙ ❍ Работа с Promises (асинхронным кодом):
---
8. Цепочка ошибок
⌛ Задача: Что выведет следующий код?
```javascript
Promise.reject("Error")
  .then(result => console.log(result))
  .catch(error => {
    console.log(error);
    throw new Error("New Error");
  })
  .catch(error => console.log(error.message));
```
🎯 Решение:
```
"Error"
"New Error"
```
---------------------------------------------------------------------------------------------
