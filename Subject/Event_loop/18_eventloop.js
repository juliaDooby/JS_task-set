---------------------------------------------------------------------------------------------  
⋙ ❍ Задача на eventLoop:
---
18. Использование `Promise.resolve()` для микрозадач
⌛ Задача: Напишите код, который демонстрирует выполнение промиса как микрозадачи.
🎯 Решение:
```javascript
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("End");
```
Объяснение:
- Промисы (микрозадачи) выполняются после выполнения синхронного кода и до макрозадач (таких как `setTimeout`).
- Порядок вывода:
  1. "Start"
  2. "End"
  3. "Promise resolved"
---------------------------------------------------------------------------------------------  
