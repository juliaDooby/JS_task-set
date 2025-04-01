---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 8: Однократное выполнение функции
Напишите функцию `once`, которая гарантирует, что переданная функция будет выполнена только один раз.
🎯 Решение:
```javascript
function once(fn) {
  let called = false;

  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
}

function logMessage(message) {
  console.log(message);
}

const logOnce = once(logMessage);
logOnce('This will be logged'); // This will be logged
logOnce('This will not be logged'); // (ничего не выведет)
```
Объяснение:
- Замыкание сохраняет флаг `called`, который предотвращает повторный вызов функции.
---------------------------------------------------------------------------------------------
