---------------------------------------------------------------------------------------------  
⋙ ❍ Задача на eventLoop:
---
33. Ожидание всех промисов с задержкой
⌛ Задача: Напишите функцию, которая ждёт завершения всех промисов с задержкой и выводит результат.
🎯 Решение:
```javascript
async function waitForAll() {
  const promise1 = new Promise(resolve => setTimeout(resolve, 1000, 'First'));
  const promise2 = new Promise(resolve => setTimeout(resolve, 2000, 'Second'));

  const results = await Promise.all([promise1, promise2]);
  console.log(results); // ["First", "Second"]
}

waitForAll();
```
Объяснение:
- Все промисы в `Promise.all()` будут ждать друг друга, и результат будет выведен только после завершения всех.
--------------------------------------------------------------------------------------------- 
