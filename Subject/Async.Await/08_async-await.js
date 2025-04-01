---------------------------------------------------------------------------------------------
⋙ ❍ async/await:
---
8. Использование `finally`
⌛ Задача: Добавьте `finally` в `async` функцию.
🎯 Решение:
```javascript
async function run() {
  try {
    const result = await Promise.resolve("Success");
    console.log(result); // "Success"
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Cleanup"); // "Cleanup"
  }
}

run();
```
Объяснение: `finally` выполняется независимо от результата промиса.
---------------------------------------------------------------------------------------------
