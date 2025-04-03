---------------------------------------------------------------------------------------------  
⋙ ❍ Event Loop:
--- 
4. Микротаски внутри макротасок
⌛ Задача: Что выведет код?
```javascript
setTimeout(() => {
  console.log("Timeout");
  Promise.resolve().then(() => console.log("Promise inside Timeout"));
}, 0);
Promise.resolve().then(() => console.log("Promise"));
```
🎯 Решение:
```
Promise
Timeout
Promise inside Timeout
```
Объяснение: Микротаски, такие как `Promise.then`, выполняются до следующей макротаски.
---------------------------------------------------------------------------------------------
