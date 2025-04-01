---------------------------------------------------------------------------------------------
⋙ ❍ async/await:
---
2. Последовательное выполнение
⌛ Задача: Выполните два асинхронных вызова последовательно.
🎯 Решение:
```javascript
async function task1() {
  return "Task 1 completed";
}

async function task2() {
  return "Task 2 completed";
}

async function runTasks() {
  const result1 = await task1();
  console.log(result1); // "Task 1 completed"
  const result2 = await task2();
  console.log(result2); // "Task 2 completed"
}

runTasks();
```
Объяснение: Выполнение асинхронных задач идёт по порядку.
---------------------------------------------------------------------------------------------
