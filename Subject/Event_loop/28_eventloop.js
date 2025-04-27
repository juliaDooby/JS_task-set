---------------------------------------------------------------------------------------------  
⋙ ❍ Задача на eventLoop:
---
28. Ожидание нескольких асинхронных операций
⌛ Задача: Напишите код, который ждёт завершения нескольких асинхронных операций с помощью `Promise.all`.
🎯 Решение:
```javascript
async function fetchData() {
  const promise1 = new Promise(resolve => setTimeout(() => resolve("Data 1"), 1000));
  const promise2 = new Promise(resolve => setTimeout(() => resolve("Data 2"), 2000));

  const results = await Promise.all([promise1, promise2]);
  console.log(results); // ["Data 1", "Data 2"]
}

fetchData();
```
Объяснение:
- `Promise.all()` ждёт выполнения всех промисов и возвращает массив их результатов.
---------------------------------------------------------------------------------------------  
