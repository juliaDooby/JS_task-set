---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
--------------- 
⌛ Задача 7: Лимит вызовов функции
Напишите функцию `limit`, которая позволяет вызвать переданную функцию только указанное количество раз.
🎯 Решение:
```javascript
function limit(fn, times) {
  let count = 0;

  return function (...args) {
    if (count < times) {
      count++;
      return fn(...args);
    } else {
      console.log('Function call limit exceeded');
    }
  };
}

function greet(name) {
  return `Hello, ${name}!`;
}

const limitedGreet = limit(greet, 3);
console.log(limitedGreet('Alice')); // Hello, Alice!
console.log(limitedGreet('Bob'));   // Hello, Bob!
console.log(limitedGreet('Charlie')); // Hello, Charlie!
console.log(limitedGreet('Dave'));    // Function call limit exceeded
```
Объяснение:
- Замыкание сохраняет переменную `count`, которая отслеживает количество вызовов функции.
---------------------------------------------------------------------------------------------
