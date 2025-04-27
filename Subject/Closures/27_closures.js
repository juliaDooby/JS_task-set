---------------------------------------------------------------------------------------------  
⋙ ❍ Задача на понимание замыканий\колбеков:
---
27. Замыкание для создания счётчика с ограничением
⌛ Задача: Напишите функцию, которая создаёт счётчик с максимальным значением.
🎯 Решение:
```javascript
function createLimitedCounter(max) {
  let count = 0;
  return function() {
    if (count < max) {
      count++;
    }
    return count;
  };
}

const counter = createLimitedCounter(5);
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4
console.log(counter()); // 5
console.log(counter()); // 5 (дальше не увеличивается)
```
Объяснение: Внутри замыкания переменная `count` ограничена максимальным значением `max`.
---------------------------------------------------------------------------------------------  
