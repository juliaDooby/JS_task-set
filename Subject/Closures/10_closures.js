---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 10: Генератор уникальных идентификаторов
Напишите функцию `createIdGenerator`, которая создает генератор уникальных числовых идентификаторов.
🎯 Решение:
```javascript
function createIdGenerator(start = 0) {
  let id = start;

  return function () {
    return id++;
  };
}

const generateId = createIdGenerator(100);
console.log(generateId()); // 100
console.log(generateId()); // 101
console.log(generateId()); // 102
```
Объяснение:
- Замыкание сохраняет переменную `id`, которая увеличивается при каждом вызове.
---------------------------------------------------------------------------------------------
