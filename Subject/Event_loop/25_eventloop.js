---------------------------------------------------------------------------------------------  
⋙ ❍ Задача на eventLoop:
---
25. Асинхронная функция с несколькими `await`
⌛ Задача: Напишите асинхронную функцию с двумя `await` и объясните, как будет выполняться код.
🎯 Решение:
```javascript
async function asyncFunction() {
  console.log("Start");

  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("After 1 second");

  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("After 2 seconds");

  console.log("End");
}

asyncFunction();
```
Объяснение:
- Код выполнится последовательно, с задержкой в 1 секунду между каждым выводом.
---------------------------------------------------------------------------------------------  
