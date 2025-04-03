---------------------------------------------------------------------------------------------  
⋙ ❍ Event Loop:
---
11. Задержка через промисы
⌛ Задача: Реализуйте задержку с использованием `Promise`.
🎯 Решение:
```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("Start");
  await delay(1000);
  console.log("End");
}

run();
```
---------------------------------------------------------------------------------------------
