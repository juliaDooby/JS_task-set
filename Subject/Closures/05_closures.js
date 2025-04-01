---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 5: Запоминание результатов (мемоизация)
Напишите функцию `memoize`, которая оптимизирует функцию путем запоминания уже вычисленных результатов.
🎯 Решение:
```javascript
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function slowFactorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * slowFactorial(n - 1);
}

const fastFactorial = memoize(slowFactorial);
console.log(fastFactorial(5)); // 120
console.log(fastFactorial(5)); // 120 (из кеша)
```
Объяснение:
- Замыкание используется для хранения объекта `cache`.
- При повторном вызове с теми же аргументами результат берется из кеша.
---------------------------------------------------------------------------------------------
