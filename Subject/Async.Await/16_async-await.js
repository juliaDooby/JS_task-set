---------------------------------------------------------------------------------------------
⋙ ❍ async/await:
--- 
16. Повторная попытка выполнения задачи
⌛ Задача: Напишите функцию, которая повторяет выполнение асинхронной задачи 3 раза при ошибке.
🎯 Решение:
```javascript
async function retry(task, retries) {
  try {
    return await task();
  } catch (error) {
    if (retries > 0) {
      console.log("Retrying...");
      return retry(task, retries - 1);
    }
    throw error;
  }
}

async function task() {
  throw new Error("Task failed");
}

retry(task, 3).catch(console.log); // "Task failed" после 3 попыток
```
---------------------------------------------------------------------------------------------
