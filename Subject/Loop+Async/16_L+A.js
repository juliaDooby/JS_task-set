--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача на асинхронность + eventLoop:
---
16. Вложенные промисы с асинхронной обработкой
⌛ Задача: Напишите код, который сначала ожидает один промис, а затем запускает второй после его завершения.
🎯 Решение:
```javascript
async function asyncFunction() {
  const firstResult = await new Promise((resolve) => setTimeout(() => resolve("First task"), 1000));
  console.log(firstResult); // First task

  const secondResult = await new Promise((resolve) => setTimeout(() => resolve("Second task"), 2000));
  console.log(secondResult); // Second task
}

asyncFunction();
```
Объяснение: Мы используем `await` для ожидания каждого промиса перед запуском следующего.
--------------------------------------------------------------------------------------------- 

