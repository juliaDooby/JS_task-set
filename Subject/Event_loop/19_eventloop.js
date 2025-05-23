---------------------------------------------------------------------------------------------  
⋙ ❍ Задача на eventLoop:
---
19. Смешивание `setTimeout()` и `Promise`
⌛ Задача: Напишите код, в котором сначала выполняется промис, а затем таймер с `setTimeout()`.
🎯 Решение:
```javascript
Promise.resolve().then(() => {
  console.log("Promise resolved");
});

setTimeout(() => {
  console.log("setTimeout executed");
}, 0);
```
Объяснение:
- Промисы всегда выполняются перед макрозадачами (`setTimeout()`).
- Порядок вывода:
  1. "Promise resolved"
  2. "setTimeout executed"
---------------------------------------------------------------------------------------------  
