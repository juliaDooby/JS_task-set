---------------------------------------------------------------------------------------------  
⋙ ❍ Задача на понимание замыканий\колбеков:
---
22. Замыкание для формирования уникального идентификатора
⌛ Задача: Напишите функцию, которая генерирует уникальные идентификаторы.
🎯 Решение:
```javascript
function uniqueIdGenerator() {
  let id = 0;
  return function() {
    return ++id;
  };
}

const getId = uniqueIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2
```
Объяснение: Функция `uniqueIdGenerator` создаёт замыкание для переменной `id`, которая инкрементируется при каждом вызове внутренней функции.
---------------------------------------------------------------------------------------------  
