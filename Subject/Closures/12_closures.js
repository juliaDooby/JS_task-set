---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 12: Кэширование результатов
Напишите функцию `cache`, которая сохраняет результаты выполнения переданной функции для оптимизации.
🎯 Решение:
```javascript
function cache(fn) {
  const results = new Map();

  return function (arg) {
    if (results.has(arg)) {
      return results.get(arg);
    }
    const result = fn(arg);
    results.set(arg, result);
    return result;
  };
}

function square(n) {
  return n * n;
}

const cachedSquare = cache(square);
console.log(cachedSquare(4)); // 16
console.log(cachedSquare(4)); // 16 (из кеша)
```
Объяснение:
- Замыкание сохраняет объект `results` для хранения вычисленных значений.
---------------------------------------------------------------------------------------------
