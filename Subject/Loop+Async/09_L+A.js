--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача на асинхронность + eventLoop:
---
9. Асинхронная функция с исключениями
⌛ Задача: Напишите асинхронную функцию, которая использует `try/catch` для обработки ошибок.
🎯 Решение:
```javascript
async function asyncFunction() {
  try {
    const result = await Promise.reject("Something went wrong");
    console.log(result);
  } catch (error) {
    console.log(error); // "Something went wrong"
  }
}

asyncFunction();
```
Объяснение: Используем `try/catch` для обработки ошибок в асинхронной функции с `await`.
--------------------------------------------------------------------------------------------- 
