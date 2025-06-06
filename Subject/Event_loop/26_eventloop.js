---------------------------------------------------------------------------------------------  
⋙ ❍ Задача на eventLoop:
---
26. Микрозадачи и макрозадачи в одном цикле
⌛ Задача: Напишите код, который смешивает микрозадачи и макрозадачи и объясните порядок их выполнения.
🎯 Решение:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
}).then(() => {
  console.log("Promise 2");
});

console.log("End");
```
Объяснение:
- Порядок вывода:
  1. "Start"
  2. "End"
  3. "Promise 1" (микрозадача)
  4. "Promise 2" (микрозадача)
  5. "setTimeout" (макрозадача)
--------------------------------------------------------------------------------------------- 
