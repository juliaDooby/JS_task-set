---------------------------------------------------------------------------------------------
⋙ ❍ async/await:
---
3. Параллельное выполнение
⌛ Задача: Выполните два асинхронных вызова параллельно.
🎯 Решение:
```javascript
async function task1() {
  return "Task 1 completed";
}

async function task2() {
  return "Task 2 completed";
}

async function runTasks() {
  const [result1, result2] = await Promise.all([task1(), task2()]);
  console.log(result1, result2); // "Task 1 completed", "Task 2 completed"
}

runTasks();
```
Объяснение: `Promise.all` выполняет задачи параллельно и возвращает массив результатов.
---------------------------------------------------------------------------------------------
