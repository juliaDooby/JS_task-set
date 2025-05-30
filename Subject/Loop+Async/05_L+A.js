--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача на асинхронность + eventLoop:
---
5. Понимание Event Loop и очереди микрозадач
⌛ Задача: Напишите код, который покажет, что микрозадачи выполняются перед макрозадачами в JavaScript (используйте `Promise` и `setTimeout`).
🎯 Решение:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Inside Promise");
});

console.log("End");
```
Объяснение: Код выводит:
1. "Start"
2. "End"
3. "Inside Promise" (микрозадача)
4. "Inside setTimeout" (макрозадача)
Микрозадачи (например, промисы) выполняются перед макрозадачами (например, `setTimeout`), даже если задержка `setTimeout` равна 0.
---------------------------------------------------------------------------------------------
