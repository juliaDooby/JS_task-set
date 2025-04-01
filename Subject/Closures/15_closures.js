---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 15: Трекер выполнения функций
Напишите функцию, которая отслеживает, сколько раз была вызвана переданная функция.
🎯 Решение:
```javascript
function trackCalls(fn) {
  let count = 0;

  return function (...args) {
    count++;
    console.log(`Called ${count} times`);
    return fn(...args);
  };
}

function add(a, b) {
  return a + b;
}

const trackedAdd = trackCalls(add);
console.log(trackedAdd(2, 3)); // Called 1 times, 5
console.log(trackedAdd(4, 5)); // Called 2 times, 9
```
Объяснение:
- Замыкание сохраняет переменную `count`, которая увеличивается при каждом вызове.
---------------------------------------------------------------------------------------------
