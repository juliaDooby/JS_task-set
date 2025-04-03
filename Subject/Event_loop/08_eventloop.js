---------------------------------------------------------------------------------------------  
⋙ ❍ Event Loop:
--- 
8. Рекурсивный `setTimeout`
⌛ Задача: Реализуйте интервал с использованием `setTimeout`.
🎯 Решение:
```javascript
function customInterval(callback, delay) {
  function execute() {
    callback();
    setTimeout(execute, delay);
  }
  setTimeout(execute, delay);
}

customInterval(() => console.log("Interval"), 1000);
```
---------------------------------------------------------------------------------------------
