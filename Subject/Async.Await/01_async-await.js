---------------------------------------------------------------------------------------------
⋙ ❍ async/await:
---
1. Обработка ошибки
⌛ Задача: Обработайте ошибку в `async` функции.
🎯 Решение:
```javascript
async function errorDemo() {
  throw new Error("Something went wrong");
}

async function run() {
  try {
    await errorDemo();
  } catch (error) {
    console.log(error.message); // "Something went wrong"
  }
}

run();
```
Объяснение: Используйте `try...catch` для обработки ошибок в `async` функциях.
---------------------------------------------------------------------------------------------
