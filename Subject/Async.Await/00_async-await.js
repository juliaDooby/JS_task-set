---------------------------------------------------------------------------------------------
⋙ ❍ async/await:
---
0. Простое использование `async/await`
⌛ Задача: Напишите функцию, которая возвращает `"Hello, Async/Await"` через 1 секунду с использованием `async/await`.
🎯 Решение:
```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function greet() {
  await delay(1000);
  return "Hello, Async/Await";
}

greet().then(console.log); // "Hello, Async/Await"
```
Объяснение: `await` приостанавливает выполнение функции до выполнения промиса.
---------------------------------------------------------------------------------------------
