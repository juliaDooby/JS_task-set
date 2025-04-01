---------------------------------------------------------------------------------------------
⋙ ❍ async/await:
---
7. Прекращение выполнения при ошибке
⌛ Задача: Что произойдёт, если в цепочке вызовов произойдёт ошибка?
🎯 Решение:
```javascript
async function task1() {
  return "Task 1";
}

async function task2() {
  throw new Error("Task 2 failed");
}

async function runTasks() {
  try {
    const result1 = await task1();
    console.log(result1); // "Task 1"
    const result2 = await task2(); // Ошибка
    console.log(result2);
  } catch (error) {
    console.log(error.message); // "Task 2 failed"
  }
}

runTasks();
```
Объяснение: Если промис выбрасывает ошибку, она перехватывается в блоке `catch`.
---------------------------------------------------------------------------------------------
