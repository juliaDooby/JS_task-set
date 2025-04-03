---------------------------------------------------------------------------------------------  
⋙ ❍ Event Loop:
---  
12. Вложенные микротаски
⌛ Задача: Что выведет код?
```javascript
Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    return Promise.resolve();
  })
  .then(() => console.log("Promise 2"))
  .then(() => console.log("Promise 3"));
```
🎯 Решение:
```
Promise 1
Promise 2
Promise 3
```
---------------------------------------------------------------------------------------------
