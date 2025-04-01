---------------------------------------------------------------------------------------------
⋙ ❍ async/await:
---
14. Промисификация функций
⌛ Задача: Превратите функцию с колбэком в `async/await`.
🎯 Решение:
```javascript
function delay(ms, callback) {
  setTimeout(() => callback(null, "Done"), ms);
}

function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
}

const delayAsync = promisify(delay);
delayAsync(1000).then(console.log); // "Done"
```
---------------------------------------------------------------------------------------------
