---------------------------------------------------------------------------------------------  
⋙ ❍ Браузер API:
---
15. Использование Web Workers
⌛ Задача: Создайте новый веб-воркер, который будет выполнять вычисления в фоновом потоке.
🎯 Решение:
```javascript
// main.js
const worker = new Worker('worker.js');
worker.postMessage('Start work');

worker.onmessage = function(event) {
  console.log('Worker says:', event.data);
};
```

```javascript
// worker.js
onmessage = function(event) {
  postMessage('Work is done');
};
```
Объяснение:
- Веб-воркеры позволяют выполнять JavaScript код в фоновом потоке без блокировки основного потока.
---------------------------------------------------------------------------------------------
