---------------------------------------------------------------------------------------------
⋙ ❍ async/await:
---
9. Обработка нескольких ошибок
⌛ Задача: Как обработать ошибки для нескольких асинхронных вызовов?
🎯 Решение:
```javascript
async function task1() {
  throw new Error("Task 1 failed");
}

async function task2() {
  throw new Error("Task 2 failed");
}

async function runTasks() {
  const results = await Promise.allSettled([task1(), task2()]);
  results.forEach(result => {
    if (result.status === "fulfilled") {
      console.log(result.value);
    } else {
      console.log(result.reason.message);
    }
  });
}

runTasks();
```
Объяснение: `Promise.allSettled` возвращает результаты всех промисов, включая ошибки.
---------------------------------------------------------------------------------------------
